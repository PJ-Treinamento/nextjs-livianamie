import styled from 'styled-components';

import { Earlybirds } from '../../styles/icons';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    height: 100vh;

    > strong {
        font-size: 1.4rem;

        color: var(--darker-purple);
        text-shadow: 1px 1px var(--yellow);

        margin-bottom: 3rem;

        @media (min-width: 500px) {
            font-size: 1.6rem;
        }
        @media (min-width: 800px) {
            font-size: 1.9rem;
        }
        @media (min-width: 1200px) {
            font-size: 2.2rem;
        }
    }

    > span {
        font-size: 1rem;

        color: red;

        margin-top: 1rem;

        @media (min-width: 500px) {
            font-size: 1.1rem;
        }
        @media (min-width: 800px) {
            font-size: 1.2rem;
        }
        @media (min-width: 1200px) {
            font-size: 1.4rem;
        }
    }

    > button {
        padding: 0.5rem 1.5rem;
        margin-top: 4rem;
        background: var(--purple);

        flex-shrink: 0;

        box-shadow: 0.1rem 0.1rem 0 0.1rem var(--yellow);
        border-radius: 0.8rem;

        font-family: 'Poppins', 'Helvetica', Arial, sans-serif;
        font-size: 1.2rem;
        font-weight: bold;
        letter-spacing: 1px;
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
            padding: 0.7rem 1.7rem;

            font-size: 1.3rem;
        }
        @media (min-width: 800px) {
            padding: 0.8rem 2.2rem;

            font-size: 1.5rem;
        }
        @media (min-width: 1200px) {
            padding: 1rem 2.9rem;

            font-size: 2rem;
        }
    }
`;
export const Logo = styled(Earlybirds)`
    width: 70px;
    flex-shrink: 0;

    color: var(--purple);

    margin-bottom: 3rem;

    &:hover {
        animation: shake 1s;
        animation-iteration-count: infinite;

        @keyframes shake {
            0% {
                transform: rotate(0deg);
            }
            10% {
                transform: rotate(-10deg);
            }
            20% {
                transform: rotate(10deg);
            }
            30% {
                transform: rotate(0deg);
            }
            40% {
                transform: rotate(-10deg);
            }
            100% {
                transform: rotate(10deg);
            }
            60% {
                transform: rotate(0deg);
            }
            70% {
                transform: rotate(-10deg);
            }
            80% {
                transform: rotate(10deg);
            }
            90% {
                transform: rotate(0deg);
            }
            100% {
                transform: rotate(10deg);
            }
        }
    }

    @media (min-width: 500px) {
        width: 80px;
    }
    @media (min-width: 800px) {
        width: 90px;
    }
    @media (min-width: 1200px) {
        width: 120px;
    }
`;
export const Inputs = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    > input {
        background-color: white;
        border: 1.5px solid var(--darker-purple);
        border-radius: 0.5rem;

        font-size: 1.1rem;

        width: 18rem;

        padding: 0.5rem;

        &:first-child {
            margin-bottom: 2rem;
        }

        &:hover,
        &:after {
            border: 2px solid var(--darker-purple);
        }

        @media (min-width: 500px) {
            width: 22rem;

            padding: 0.5rem 0.7rem;

            font-size: 1.3rem;
        }
        @media (min-width: 800px) {
            width: 26rem;

            padding: 0.5rem 0.9rem;

            font-size: 1.5rem;
        }
        @media (min-width: 1200px) {
            width: 35rem;

            padding: 0.7rem 1.3rem;

            font-size: 1.9rem;
        }
    }
`;
export const Options = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: fit-content;

    margin-top: 1rem;

    > p {
        color: var(--darker-purple);
        text-decoration: underline;

        &:hover {
            font-weight: bold;
        }

        &:first-child {
            margin-right: 2rem;
        }
        @media (min-width: 500px) {
            font-size: 1rem;
        }
        @media (min-width: 800px) {
            font-size: 1.1rem;
        }
        @media (min-width: 1200px) {
            font-size: 1.4rem;
        }
    }
`;
