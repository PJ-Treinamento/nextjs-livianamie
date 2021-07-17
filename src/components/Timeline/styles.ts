import styled from 'styled-components';

export const TimelineWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
    margin-top: 2rem;

    background-color: white;
    border: 0.15rem solid var(--purple);
    border-radius: 0.5rem;

    box-shadow: 0 0 1.6rem 0.1rem rgba(0, 0, 0, 0.25);
`;
export const Tab = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    border-bottom: 0.1rem solid var(--darker-purple);

    width: 100%;
    height: max-content;
`;

export const TabInput = styled.input`
    display: none;

    @media (min-width: 500px) {
        display: initial;
        width: 13rem;
        height: 2.2rem;
        margin-right: 1rem;
        padding: 0.3rem 0.8rem;
        font-size: 1rem;

        background-color: var(--lighter-purple);

        border: 0.15rem solid var(--darker-purple);
        border-radius: 0.8rem;
        box-shadow: 0.2rem 0.2rem 0 0 var(--yellow);
    }

    @media (min-width: 800px) {
        width: 15rem;
        height: 2.5rem;
        font-size: 1.1rem;
    }
    @media (min-width: 1200px) {
        width: 18rem;
        height: 3rem;
        font-size: 1.3rem;
    }
`;

export const TimelineSections = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;

    > p#pius-section {
        color: var(--yellow);
        text-shadow: 0.1rem 0.1rem 0 var(--darker-purple);

        background-color: var(--purple);
        border-right: var(--darker-purple) solid 0.1rem;
    }
`;

export const Section = styled.p`
    width: fit-content;
    height: 100%;

    color: var(--darker-purple);
    font-size: 1rem;
    font-weight: bold;

    padding: 1rem 1.2rem;

    cursor: pointer;

    &:hover {
        background-color: var(--lighter-purple);
    }

    @media (min-width: 500px) {
        font-size: 1.2rem;
    }
    @media (min-width: 800px) {
        font-size: 1.3rem;
    }
    @media (min-width: 1200px) {
        font-size: 1.6rem;

        padding: 1.2rem 1.6rem;
    }
`;
