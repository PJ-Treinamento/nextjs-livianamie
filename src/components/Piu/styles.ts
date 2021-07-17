import styled, { css } from 'styled-components';
import Image from 'next/image';
import {
    ThreeDots,
    Chat,
    ArrowRepeat,
    Heart,
    Star,
    Share,
    Trash
} from '../../styles/icons';

type ILikeProps = {
    isLiked?: boolean;
};

type IFavoriteProps = {
    isFavorited?: boolean;
};

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
`;
export const ProfilePictureWrapper = styled.div`
    margin-right: 1rem;
`;
export const ProfilePicture = styled(Image)`
    border-radius: 50%;
    cursor: pointer;
`;
export const PiuContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    width: 100%;

    margin-top: 0.2rem;
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
`;

const UserCSS = css`
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
`;

export const UserNames = styled.strong`
    ${UserCSS}
    font-size: 1.2rem;
    margin-right: 0.4rem;

    @media (min-width: 500px) {
        font-size: 1.3rem;
    }
    @media (min-width: 800px) {
        font-size: 1.4rem;
    }
    @media (min-width: 1200px) {
        font-size: 1.6rem;
    }
`;
export const UserUsername = styled.span`
    ${UserCSS}
    font-size: 0.9rem;

    cursor: pointer;

    &:hover {
        color: var(--darker-purple);
    }

    @media (min-width: 500px) {
        font-size: 1rem;
    }
    @media (min-width: 800px) {
        font-size: 1.1rem;
    }
    @media (min-width: 1200px) {
        font-size: 1.2rem;
    }
`;
export const PiuText = styled.p`
    font-size: 1.2rem;
    margin: 0.2rem 0;
    height: fit-content;

    word-break: break-all;

    @media (min-width: 500px) {
        font-size: 1.3rem;

        margin: 0.7rem 0;
    }
    @media (min-width: 800px) {
        font-size: 1.4rem;

        margin: 0.9rem 0;
    }
    @media (min-width: 1200px) {
        font-size: 1.6rem;
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
    width: 1rem;

    cursor: pointer;

    margin-right: 0.2rem;

    &:hover {
        fill: var(--darker-purple) !important;
    }

    @media (min-width: 500px) {
        width: 1.1rem;
    }
    @media (min-width: 800px) {
        width: 1.3rem;
    }
    @media (min-width: 1200px) {
        width: 1.5rem;
    }
`;
export const Status = styled.div`
    display: flex;
    align-content: center;

    font-size: 0.9rem;

    @media (min-width: 500px) {
        font-size: 1rem;
    }
    @media (min-width: 800px) {
        font-size: 1.2rem;
    }
    @media (min-width: 1200px) {
        font-size: 1.2rem;
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
export const LikeIcon = styled(Heart)<ILikeProps>`
    ${iconCSS}

    fill: ${(props) => (props.isLiked ? 'red' : 'black')}!important;
`;
export const FavoriteIcon = styled(Star)<IFavoriteProps>`
    ${iconCSS}

    fill: ${(props) => (props.isFavorited ? '#FFB500' : 'black')}!important;
`;
export const ShareIcon = styled(Share)`
    ${iconCSS}
`;
export const TrashIcon = styled(Trash)`
    ${iconCSS}
`;
