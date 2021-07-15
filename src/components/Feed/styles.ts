import styled from 'styled-components';

export const Main = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    width: 100%;

    margin: 2rem;

    @media (min-width: 500px) {
        margin-right: 7rem;
    }
    @media (min-width: 800px) {
        margin: 3rem;
        margin-right: 24rem;
    }
    @media (min-width: 1200px) {
        margin: 4rem;
        margin-right: 28rem;
    }
`;
