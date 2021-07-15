import styled from 'styled-components';

export const Container = styled.div`
    background: var(--lighter-purple);
`;
export const Wrapper = styled.div`
    width: 100%;
    height: 100%;

    margin: 0 auto;

    display: flex;
    flex-direction: column;
    justify-content: center;

    background: url(/background.svg) no-repeat center center fixed;
    background-size: cover;
`;
export const MiddleWrapper = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: space-between;
`;
