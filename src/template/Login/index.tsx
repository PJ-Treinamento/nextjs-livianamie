import { FormEvent, useCallback, useEffect, useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { Container, Logo, Inputs, Options } from './styles';

const LoginTemplate: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const { login, error } = useAuth();

    const handleLogin = useCallback(
        async (e: FormEvent) => {
            e.preventDefault();

            login({ email, password });
        },
        [login, email, password]
    );

    useEffect(() => {
        error &&
            (email === '' || password === ''
                ? setErrorMessage('* Os campos devem estar preenchidos')
                : setErrorMessage('* E-mail ou senha inválidos'));
    }, [email, error, password]);

    return (
        <Container>
            <Logo />
            <strong>Bem-vinde de volta!</strong>
            <Inputs>
                <input
                    onChange={(e) => {
                        setEmail(e.target.value);
                    }}
                    value={email}
                    type="text"
                    placeholder="e-mail"
                />
                <input
                    onChange={(e) => {
                        setPassword(e.target.value);
                    }}
                    value={password}
                    type="password"
                    placeholder="senha"
                />
            </Inputs>
            <span>{errorMessage}</span>
            <button onClick={handleLogin} type="submit">
                Entrar
            </button>
            <Options>
                <p>Esqueci minha senha</p>
                <p>Cadastre-se</p>
            </Options>
        </Container>
    );
};

export default LoginTemplate;
