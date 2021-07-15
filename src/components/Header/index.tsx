import {
    Container,
    PageInfo,
    Logo,
    SearchFeature,
    MoreIcon,
    PopUpWrapper,
    PopUp,
    CloseIcon
} from './styles';

const Header: React.FC = () => {
    return (
        <Container>
            <PageInfo>
                <Logo />
                <strong>Página Inicial</strong>
            </PageInfo>

            <button id="more" type="submit">
                <MoreIcon />
            </button>

            <SearchFeature>
                <button type="submit">Buscar</button>
            </SearchFeature>

            <PopUpWrapper>
                <PopUp>
                    <input type="text" placeholder="Buscar" />
                    <button type="submit">
                        <CloseIcon />
                    </button>
                </PopUp>
            </PopUpWrapper>
        </Container>
    );
};

export default Header;
