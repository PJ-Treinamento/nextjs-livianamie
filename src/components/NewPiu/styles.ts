import styled from 'styled-components';
import Image from 'next/image';

type IErrorProps = {
    isWrong?: boolean;
};

export const NewPiuWrapper = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    background-color: white;
    border: 0.15rem solid var(--purple);
    border-radius: 0.5rem;

    box-shadow: 0 0 1.6rem 0.1rem rgba(0, 0, 0, 0.25);

    width: 100%;

    padding: 1rem;

    @media (min-width: 500px) {
        height: 10rem;
    }
    @media (min-width: 800px) {
        height: 11rem;
    }
    @media (min-width: 1200px) {
        height: 13rem;

        padding: 1.5rem;
    }

    > img {
        width: 4rem;

        border: 0.15rem solid #7c00f3;
        border-radius: 50%;

        @media (min-width: 500px) {
            width: 4.3rem;
        }
        @media (min-width: 800px) {
            width: 4.6rem;
        }
        @media (min-width: 1200px) {
            width: 5.2rem;
        }
    }

    > button {
        padding: 0.5rem 1.2rem;
        background: var(--purple);

        box-shadow: 0.1rem 0.1rem 0 0.1rem var(--yellow);
        border-radius: 0.8rem;

        font-family: 'Poppins', 'Helvetica', Arial, sans-serif;
        font-weight: bold;
        font-size: 1rem;
        color: var(--yellow);
        text-shadow: 0.1rem 0.1rem 0 #000000;

        cursor: pointer;

        overflow: hidden;
        transition: 0.2s transform ease-in-out;
        will-change: transform;
        z-index: 0;

        &::after {
            background-color: var(--yellow);
            border-radius: 0.8rem;
            content: '';
            display: block;
            height: 100%;
            width: 100%;
            position: absolute;
            left: 0;
            top: 0;
            transform: translate(-100%, 0) rotate(0);
            transition: 0.2s transform ease-out;
            will-change: transform;
            z-index: -1;
        }
        &:hover::after {
            transform: translate(0, 0);
        }
        &:hover {
            transform: scale(1.05);
            will-change: transform;

            color: var(--darker-purple);
            box-shadow: 0.2rem 0.2rem 0 0 var(--purple);
            text-shadow: 0 0 0;
        }

        @media (min-width: 500px) {
            padding: 0.5rem 1.5rem;

            font-size: 1.1rem;
        }
        @media (min-width: 800px) {
            padding: 0.5rem 2rem;

            font-size: 1.4rem;
        }
        @media (min-width: 1200px) {
            padding: 0.5rem 2.5rem;

            font-size: 1.7rem;
        }
    }
`;
export const ProfilePicture = styled(Image)`
    border-radius: 50%;
    cursor: pointer;
`;
export const Text = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
    height: 100%;

    margin: 0 1.5rem;
`;
export const Textarea = styled.textarea<IErrorProps>`
    width: 100%;
    height: 100%;

    resize: none;

    padding: 1rem;

    font-size: 1rem;

    outline: auto;
    overflow-y: auto;

    outline-color: ${(props) => (props.isWrong ? 'red' : '#D6CCDC')};

    @media (min-width: 500px) {
        font-size: 1.1rem;
    }
    @media (min-width: 800px) {
        font-size: 1.3rem;
    }
    @media (min-width: 1200px) {
        font-size: 1.6rem;
    }
`;
export const Counter = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;

    > span {
        font-size: 1rem;
        color: red;

        @media (min-width: 500px) {
            font-size: 1.1rem;
        }
        @media (min-width: 800px) {
            font-size: 1.2rem;
        }
        @media (min-width: 1200px) {
            font-size: 1.3rem;
        }
    }
`;

export const CounterValue = styled.p<IErrorProps>`
    font-size: 1rem;
    color: ${(props) => (props.isWrong ? 'red' : 'black')};

    @media (min-width: 500px) {
        font-size: 1.1rem;
    }
    @media (min-width: 800px) {
        font-size: 1.2rem;
    }
    @media (min-width: 1200px) {
        font-size: 1.4rem;
    }
`;
