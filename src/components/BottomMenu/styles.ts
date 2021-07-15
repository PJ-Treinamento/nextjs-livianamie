import styled, { css } from 'styled-components';
import { House, Bell, Search, Envelope } from '../../styles/icons';

export const Menu = styled.div`
    z-index: 2;
    position: fixed;
    bottom: 0;
    left: 0;

    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;

    background-color: white;
    border-top: 0.2rem solid var(--purple);

    padding: 0.8rem min(4.6rem, max(10vh, 1rem));

    @media (min-width: 500px) {
        display: none;
    }
`;
const iconCSS = css`
    width: 1.5rem;

    cursor: pointer;

    &:hover,
    &:active {
        fill: var(--darker-purple);
    }
`;
export const HomeIcon = styled(House)`
    ${iconCSS}
`;
export const NotificationsIcon = styled(Bell)`
    ${iconCSS}
`;
export const SearchIcon = styled(Search)`
    ${iconCSS}
`;
export const DMIcon = styled(Envelope)`
    ${iconCSS}
`;
