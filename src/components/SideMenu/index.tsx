import { useAuth } from 'hooks/useAuth';
import { IUser } from 'models';
import ProfileImage from '../../../public/profile.svg';
import {
    SideMenuWrapper,
    Menu,
    Option,
    OptionName,
    HomeIcon,
    SearchIcon,
    NotificationsIcon,
    FavoritesIcon,
    DMIcon,
    ConfigurationsIcon,
    ProfileInfos,
    UserNames,
    UserUsername,
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
                    <OptionName>Início</OptionName>
                </Option>
                <Option>
                    <NotificationsIcon />
                    <OptionName>Notificações (2)</OptionName>
                </Option>
                <Option>
                    <DMIcon />
                    <OptionName>Mensagens (5)</OptionName>
                </Option>
                <Option>
                    <FavoritesIcon />
                    <OptionName>Favoritos</OptionName>
                </Option>
                <Option>
                    <ConfigurationsIcon />
                    <OptionName>Configurações</OptionName>
                </Option>
                <Option>
                    <SearchIcon />
                    <OptionName id="menu-search">Buscar</OptionName>
                </Option>
                <Option onClick={() => logout()}>
                    <LogOutIcon />
                    <OptionName>Sair</OptionName>
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
                    <UserNames>Lívia Namie</UserNames>
                    <UserUsername>@livianamie_</UserUsername>
                </Names>
            </ProfileInfos>
        </SideMenuWrapper>
    );
};

export default SideMenu;
