import { useCallback, useContext, createContext, useState } from 'react';
import { setCookie } from 'nookies';
import { useRouter } from 'next/router';
import { IUser } from '../models/index';
import api from '../services/api';

interface LoginData {
    email: string;
    password: string;
}

interface AuthState {
    user: IUser;
    token: string;
}

interface AuthContextData {
    user: IUser;
    token: string;
    error: boolean;
    loading: boolean;
    login(user: LoginData): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
    const [error, setError] = useState(false);
    const [userData, setUserData] = useState<AuthState>({} as AuthState);
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const login = useCallback(
        async (data: LoginData) => {
            try {
                const response = await api.post('/sessions/login', data);

                const { token } = response.data;
                const { user } = response.data;
                const { username } = response.data.user;

                if (token) {
                    api.defaults.headers.Authorization = `Bearer ${token}`;

                    setCookie(undefined, '@Piupiuwer:token', token, {
                        maxAge: 60 * 60 * 1
                    });
                    setCookie(undefined, '@Piupiuwer:username', username, {
                        maxAge: 60 * 60 * 1
                    });

                    setUserData({ token, user });
                    setError(false);
                    router.push('/feed');
                }
                setLoading(false);
            } catch {
                setError(true);
                setLoading(false);
            }
        },
        [router]
    );

    return (
        <AuthContext.Provider
            value={{
                user: userData.user,
                token: userData.token,
                error,
                loading,
                login
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
