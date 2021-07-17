import { IUser } from 'models';
import { useState } from 'react';
import {
    Container,
    PageInfo,
    PageName,
    Logo,
    SearchFeature,
    SearchButton,
    MoreIcon,
    PopUpWrapper,
    PopUpInput,
    PopUp,
    CloseButton,
    CloseIcon,
    UsersList,
    User,
    Names
} from './styles';

type HeaderProps = {
    users: IUser[];
};

const Header: React.FC<HeaderProps> = ({ users }) => {
    const [popUpDisplay, setPopUpDisplay] = useState(false);
    const [search, setSearch] = useState('');

    const openPopUp = () => {
        setPopUpDisplay(true);
    };

    const closePopUp = () => {
        setPopUpDisplay(false);
    };
    return (
        <Container>
            <PageInfo>
                <Logo />
                <PageName>Página Inicial</PageName>
            </PageInfo>

            <MoreIcon />

            <SearchFeature>
                <SearchButton type="submit" onClick={openPopUp}>
                    Buscar
                </SearchButton>
            </SearchFeature>

            <PopUpWrapper isOpen={popUpDisplay}>
                <PopUp>
                    <PopUpInput
                        type="text"
                        onChange={(e) => {
                            setSearch(e.target.value);
                        }}
                        value={search}
                        placeholder="Buscar"
                    />

                    <UsersList>
                        {users.map((user: IUser) => {
                            if (
                                search === '' ||
                                user.username
                                    .toLowerCase()
                                    .includes(search.toLowerCase()) ||
                                user.first_name
                                    .toLowerCase()
                                    .includes(search.toLowerCase()) ||
                                user.last_name
                                    .toLowerCase()
                                    .includes(search.toLowerCase())
                            ) {
                                return (
                                    <User key={user.id}>
                                        <img src={user.photo} alt="" />
                                        <Names>
                                            <strong>
                                                {user.first_name}{' '}
                                                {user.last_name}
                                            </strong>
                                            <span>@{user.username}</span>
                                        </Names>
                                    </User>
                                );
                            }
                            return <></>;
                        })}
                    </UsersList>

                    <CloseButton type="submit" onClick={closePopUp}>
                        <CloseIcon />
                    </CloseButton>
                </PopUp>
            </PopUpWrapper>
        </Container>
    );
};

export default Header;
