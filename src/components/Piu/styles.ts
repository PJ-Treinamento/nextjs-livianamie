import styled, { css } from 'styled-components';
import {
    ThreeDots,
    Chat,
    ArrowRepeat,
    Heart,
    Star,
    Share,
    Trash
} from '../../styles/icons';

export const PiuWrapper = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    background-color: white;
    border-top: 0.05rem solid var(--purple);

    width: 100%;

    padding: 1rem;

    :first-child {
        border-top: none;
    }

    @media (min-width: 800px) {
        padding: 1.2rem;
    }
    @media (min-width: 1200px) {
        padding: 1.5rem;
    }

    > img {
        width: 3rem;
        height: 3rem;

        margin-right: 1rem;

        object-fit: cover;

        border: 0.15rem solid #7c00f3;
        border-radius: 50%;

        cursor: pointer;

        @media (min-width: 500px) {
            width: 3.4rem;
            height: 3.4rem;
        }
        @media (min-width: 800px) {
            width: 3.8rem;
            height: 3.8rem;
        }
        @media (min-width: 1200px) {
            width: 4rem;
            height: 4rem;

            margin-right: 1.5rem;
        }
    }
`;
export const PiuContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    width: 100%;

    margin-top: 0.2rem;

    > p {
        font-size: 1rem;
        margin: 0.2rem 0;
        height: fit-content;

        word-break: break-all;

        @media (min-width: 500px) {
            font-size: 1.1rem;

            margin: 0.7rem 0;
        }
        @media (min-width: 800px) {
            font-size: 1.2rem;

            margin: 0.9rem 0;
        }
        @media (min-width: 1200px) {
            font-size: 1.4rem;
        }
    }
`;
export const TopContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;
`;
export const UserInfos = styled.div`
    display: flex;
    align-items: center;
    line-height: 1;

    width: 70%;

    > strong,
    span {
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }
    > strong {
        font-size: 1rem;
        margin-right: 0.3rem;

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

    > span {
        font-size: 0.8rem;

        cursor: pointer;

        &:hover {
            color: var(--darker-purple);
        }

        @media (min-width: 500px) {
            font-size: 0.9rem;
        }
        @media (min-width: 800px) {
            font-size: 1rem;
        }
        @media (min-width: 1200px) {
            font-size: 1.1rem;
        }
    }
`;

export const Interactions = styled.div`
    display: flex;
    align-content: center;
    justify-content: space-between;

    width: 95%;

    padding: 0 0.5rem;
    margin-top: 0.8rem;

    @media (min-width: 500px) {
        margin-top: 0.9rem;
    }
    @media (min-width: 800px) {
        margin-top: 1rem;
    }
    @media (min-width: 1200px) {
        margin-top: 1.1rem;
    }
`;
const iconCSS = css`
    width: 0.8rem;

    cursor: pointer;

    margin-right: 0.2rem;

    &:hover {
        fill: var(--darker-purple) !important;
    }

    @media (min-width: 500px) {
        width: 1.1rem;
    }
    @media (min-width: 800px) {
        width: 1.2rem;
    }
    @media (min-width: 1200px) {
        width: 1.3rem;
    }
`;
export const Status = styled.div`
    display: flex;
    align-content: center;

    font-size: 0.8rem;

    @media (min-width: 500px) {
        font-size: 0.9rem;
    }
    @media (min-width: 800px) {
        font-size: 1rem;
    }
    @media (min-width: 1200px) {
        font-size: 1.1rem;
    }
`;
export const DotsIcon = styled(ThreeDots)`
    ${iconCSS}
`;
export const CommentIcon = styled(Chat)`
    ${iconCSS}
`;
export const RepiuIcon = styled(ArrowRepeat)`
    ${iconCSS}
`;
export const LikeIcon = styled(Heart)`
    ${iconCSS}
`;
export const FavoriteIcon = styled(Star)`
    ${iconCSS}
`;
export const ShareIcon = styled(Share)`
    ${iconCSS}
`;
export const TrashIcon = styled(Trash)`
    ${iconCSS}
`;
