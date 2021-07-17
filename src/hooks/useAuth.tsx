import { useCallback, useContext, createContext, useState } from 'react';
import { destroyCookie, setCookie } from 'nookies';
import { useRouter } from 'next/router';
import api from '../services/api';

type LoginData = {
    email: string;
    password: string;
};

type AuthContextData = {
    error: boolean;
    login(user: LoginData): void;
    logout(): void;
};

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
    const [error, setError] = useState(false);
    const router = useRouter();

    const login = useCallback(
        async (data: LoginData) => {
            try {
                const response = await api.post('/sessions/login', data);

                const { token } = response.data;
                const { username } = response.data.user;

                if (token) {
                    api.defaults.headers.Authorization = `Bearer ${token}`;

                    setCookie(undefined, '@Piupiuwer:token', token, {
                        maxAge: 60 * 60 * 1
                    });
                    setCookie(undefined, '@Piupiuwer:username', username, {
                        maxAge: 60 * 60 * 1
                    });
                    setError(false);
                    router.push('/feed');
                }
            } catch {
                setError(true);
            }
        },
        [router]
    );

    const logout = () => {
        destroyCookie(undefined, '@Piupiuwer:token');
        destroyCookie(undefined, '@Piupiuwer:username');
        router.push('/login');
    };

    return (
        <AuthContext.Provider
            value={{
                error,
                login,
                logout
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = (): AuthContextData => {
    const context = useContext(AuthContext);

    return context;
};
