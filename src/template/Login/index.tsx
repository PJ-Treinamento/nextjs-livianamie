// import { FormEvent, useCallback, useEffect, useState } from 'react';
// import { useAuth } from '../../hooks/useAuth';
import { Container, Logo, Inputs, Options } from './styles';

const LoginTemplate = () => (
    <Container>
        <Logo />
        <strong>Bem-vinde de volta!</strong>
        <Inputs>
            <input type="text" placeholder="e-mail" />
            <input type="password" placeholder="senha" />
        </Inputs>
        <span>erro</span>
        <button type="submit">Entrar</button>
        <Options>
            <p>Esqueci minha senha</p>
            <p>Cadastre-se</p>
        </Options>
    </Container>
);

export default LoginTemplate;
