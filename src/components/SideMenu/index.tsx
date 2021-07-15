import Image from 'next/image';
import image from '../../../public/background.svg';
import {
    SideMenuWrapper,
    Menu,
    Option,
    HomeIcon,
    SearchIcon,
    NotificationsIcon,
    FavoritesIcon,
    DMIcon,
    ConfigurationsIcon,
    ProfileInfos,
    Names
} from './styles';

const SideMenu: React.FC = () => {
    return (
        <SideMenuWrapper>
            <Menu>
                <Option>
                    <HomeIcon />
                    <strong>Início</strong>
                </Option>
                <Option>
                    <NotificationsIcon />
                    <strong>Notificações (2)</strong>
                </Option>
                <Option>
                    <DMIcon />
                    <strong>Mensagens (5)</strong>
                </Option>
                <Option>
                    <FavoritesIcon />
                    <strong>Favoritos</strong>
                </Option>
                <Option>
                    <ConfigurationsIcon />
                    <strong>Configurações</strong>
                </Option>
                <Option>
                    <SearchIcon />
                    <strong id="menu-search">Buscar</strong>
                </Option>
            </Menu>

            <ProfileInfos>
                <Image src={image} alt="Foto de perfil" />
                <Names>
                    <strong>Lívia Namie</strong>
                    <span>@livianamie_</span>
                </Names>
            </ProfileInfos>
        </SideMenuWrapper>
    );
};

export default SideMenu;
