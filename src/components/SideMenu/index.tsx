import { useAuth } from 'hooks/useAuth';
import { IUser } from 'models';
import ProfileImage from '../../../public/profile.svg';
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
    ProfilePicture,
    LogOutIcon,
    Names
} from './styles';

type SideMenuProps = {
    user: IUser;
};

const SideMenu: React.FC<SideMenuProps> = ({ user }) => {
    const { logout } = useAuth();

    let profileImage = user.photo;
    if (profileImage === '.....') profileImage = ProfileImage;

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
                <Option onClick={() => logout()}>
                    <LogOutIcon />
                    <strong>Sair</strong>
                </Option>
            </Menu>
            <ProfileInfos>
                <ProfilePicture
                    src={profileImage || ProfileImage}
                    alt="Foto de perfil"
                    width={60}
                    height={60}
                />
                <Names>
                    <strong>Lívia Namie</strong>
                    <span>@livianamie_</span>
                </Names>
            </ProfileInfos>
        </SideMenuWrapper>
    );
};

export default SideMenu;
