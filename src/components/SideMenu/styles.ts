import styled, { css } from 'styled-components';
import { House, Search, Bell, Star, Envelope, Gear } from '../../styles/Icons';

export const SideMenuWrapper = styled.div`
    display: none;

    @media (min-width: 500px) {
        position: fixed;
        right: 0;

        width: 5rem;
        height: 100%;
        padding: 2rem 1rem;
        padding-bottom: 5rem;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;

        background-color: white;
        border-left: 0.2rem solid var(--purple);
    }
    @media (min-width: 800px) {
        align-items: flex-start;

        width: 20rem;

        padding: 4rem 1.5rem;
        padding-bottom: 7.5rem;
    }
    @media (min-width: 1200px) {
        top: 6rem;

        width: 24rem;

        padding: 4rem 2rem;
        padding-bottom: 7.5rem;
    }
`;
export const Menu = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 800px) {
        align-items: flex-start;
    }
`;
export const Option = styled.div`
    display: flex;
    align-content: center;
    flex-shrink: 0;

    width: fit-content;

    margin-bottom: 3rem;

    cursor: pointer;

    &:hover,
    &:active {
        color: var(--darker-purple);
    }

    @media (min-width: 1200px) {
        margin-bottom: 3.5rem;
    }

    > strong {
        display: none;
        margin-left: 0.7rem;

        font-size: 1rem;

        @media (min-width: 800px) {
            display: inline;
            font-size: 1.2rem;
        }
        @media (min-width: 1200px) {
            font-size: 1.3rem;
            margin-left: 1rem;
        }
    }

    > #menu-search {
        @media (min-width: 800px) {
            display: none;
        }
    }
`;
export const ProfileInfos = styled.div`
    display: flex;
    align-items: center;

    > img {
        width: 3rem;

        border: 0.15rem solid #7c00f3;
        border-radius: 50%;

        @media (min-width: 800px) {
            width: 4rem;

            margin-right: 0.6rem;
        }
        @media (min-width: 1200px) {
            width: 5rem;

            margin-right: 1rem;
        }
    }
`;
export const Names = styled.div`
    display: none;

    > strong {
        font-size: 1.1rem;
        letter-spacing: 0.1rem;

        padding: 0.2rem;

        cursor: pointer;

        &:hover {
            color: var(--darker-purple);
            background: var(--lighter-purple);
            border-radius: 0.8rem;
        }

        @media (min-width: 800px) {
            font-size: 1.2rem;
        }
        @media (min-width: 1200px) {
            font-size: 1.4rem;
        }
    }
    > span {
        font-size: 0.8rem;

        padding: 0.2rem;

        &:hover {
            color: var(--darker-purple);
            background: var(--lighter-purple);
            border-radius: 0.8rem;
        }

        @media (min-width: 800px) {
            font-size: 1rem;
        }
        @media (min-width: 1200px) {
            font-size: 1.1rem;
        }
    }

    @media (min-width: 800px) {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }
`;

const iconCSS = css`
    width: 1.5rem;

    @media (min-width: 1200px) {
        width: 2rem;
    }
`;
export const HomeIcon = styled(House)`
    ${iconCSS}
`;
export const NotificationsIcon = styled(Bell)`
    ${iconCSS}

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
`;
export const DMIcon = styled(Envelope)`
    ${iconCSS}
`;
export const FavoritesIcon = styled(Star)`
    ${iconCSS}
`;
export const ConfigurationsIcon = styled(Gear)`
    ${iconCSS}
`;
export const SearchIcon = styled(Search)`
    ${iconCSS}

    @media (min-width: 800px) {
        display: none;
    }
`;
