import styled from 'styled-components';
import { List, Earlybirds, XCircle } from '../../styles/icons';

type IPopUpProps = {
    isOpen: boolean;
};

export const Container = styled.header`
    z-index: 2;
    position: sticky;
    top: 0;

    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    height: 4.5rem;

    padding: 0 1.5rem;
    background-color: white;
    border-bottom: 0.2rem solid var(--purple);

    @media (min-width: 800px) {
        height: 5rem;
    }

    @media (min-width: 1200px) {
        height: 6rem;
    }

    > #more {
        @media (min-width: 800px) {
            display: none;
        }
    }
`;
export const PageInfo = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: fit-content;
`;

export const PageName = styled.strong`
    font-size: 1.4rem;

    @media (min-width: 800px) {
        font-size: 1.6rem;
    }
    @media (min-width: 1200px) {
        font-size: 2rem;
    }
`;

export const SearchFeature = styled.div`
    display: none;
    align-items: center;

    @media (min-width: 800px) {
        display: flex;
    }
`;

export const SearchButton = styled.button`
    width: 12rem;
    height: 2.5rem;

    margin-right: 2.5rem;
    padding: 0.1rem 0.5rem;
    border-radius: 0.8rem;
    box-shadow: 0.2rem 0.2rem 0 0 #fff500;

    cursor: pointer;

    background-color: var(--purple);

    color: var(--yellow);
    font-weight: bold;
    text-shadow: 0.1rem 0.1rem 0 #000000;
    font-size: 1.3rem;
    letter-spacing: 0.1rem;

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

    @media (min-width: 1200px) {
        width: 14rem;
        height: 3rem;

        margin-right: 3.5rem;
        padding: 0.1rem 1rem;

        font-size: 1.6rem;
    }
`;

export const PopUpWrapper = styled.div<IPopUpProps>`
    display: ${(props) => (props.isOpen ? 'flex' : 'none')};
    align-items: center;
    justify-content: center;

    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 1;

    background-color: rgba(0, 0, 0, 0.25);

    width: 100vw;
    height: 100%;
`;

export const PopUp = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    padding: 3rem;

    background-color: white;

    border-radius: 0.8rem;
    border: 0.15rem solid #7c00f3;
`;

export const CloseButton = styled.button``;

export const PopUpInput = styled.input`
    width: 15rem;
    height: 2.5rem;

    margin-bottom: 2rem;
    padding: 0.3rem 0.6rem;

    background-color: var(--lighter-purple);

    border: 0.15rem solid var(--darker-purple);
    border-radius: 0.8rem;
    box-shadow: 0.2rem 0.2rem 0 0 var(--yellow);

    font-size: 1.1rem;

    @media (min-width: 1200px) {
        width: 18rem;
        height: 3rem;

        font-size: 1.3rem;
    }
`;

export const UsersList = styled.div`
    display: flex;
    flex-direction: column;

    width: 100%;
    height: 30rem;

    border: 0.15rem solid var(--darker-purple);
    border-radius: 0.8rem;

    overflow-y: scroll;

    ::-webkit-scrollbar {
        width: 10px;
    }
    ::-webkit-scrollbar-track {
        background: #f1f1f1;
        border-radius: 0.8rem;
        background-color: var(--lighter-purple);
    }
    ::-webkit-scrollbar-thumb {
        border-radius: 0.8rem;
        background-color: var(--darker-purple);
    }
    ::-webkit-scrollbar-thumb:hover {
        background-color: var(--purple);
    }
`;

export const User = styled.div`
    display: flex;
    align-items: center;

    width: 25rem;

    padding: 1rem 2rem;

    cursor: pointer;

    border-top: 0.05rem solid var(--purple);

    :first-child {
        border-top: none;
    }

    &:hover {
        color: var(--darker-purple);
        background-color: var(--lighter-purple);
    }

    > img {
        width: 3.8rem;
        height: 3.8rem;

        margin-right: 1rem;

        object-fit: cover;

        border: 0.15rem solid var(--darker-purple);
        border-radius: 50%;

        cursor: pointer;

        @media (min-width: 1200px) {
            width: 4rem;
            height: 4rem;
        }
    }
`;

export const Names = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    > strong {
        font-size: 1.1rem;

        @media (min-width: 1200px) {
            font-size: 1.3rem;
        }
    }
    > p {
        font-size: 1.1rem;

        @media (min-width: 1200px) {
            font-size: 1.2rem;
        }
    }
`;

export const Logo = styled(Earlybirds)`
    width: 2rem;
    color: var(--purple);

    margin-right: 1rem;

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

    @media (min-width: 800px) {
        width: 2.5rem;

        margin-right: 1.5rem;
    }

    @media (min-width: 1200px) {
        width: 3rem;

        margin-right: 2rem;
    }
`;
export const MoreIcon = styled(List)`
    width: 1.6rem;

    cursor: pointer;

    @media (min-width: 800px) {
        display: none;
    }
`;
export const CloseIcon = styled(XCircle)`
    width: 2rem;
    color: var(--darker-purple);

    margin-top: 3rem;

    cursor: pointer;

    &:hover {
        border-radius: 50%;
        background-color: var(--lighter-purple);
    }

    @media (min-width: 1200px) {
        width: 3rem;
    }
`;
