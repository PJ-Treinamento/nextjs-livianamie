import { IUser } from 'models';
import { useState } from 'react';
import {
    Container,
    PageInfo,
    Logo,
    SearchFeature,
    MoreIcon,
    PopUpWrapper,
    PopUp,
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
                <strong>Página Inicial</strong>
            </PageInfo>

            <button id="more" type="submit">
                <MoreIcon />
            </button>

            <SearchFeature>
                <button type="submit" onClick={openPopUp}>
                    Buscar
                </button>
            </SearchFeature>

            <PopUpWrapper isOpen={popUpDisplay}>
                <PopUp>
                    <input
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

                    <button type="submit" onClick={closePopUp}>
                        <CloseIcon />
                    </button>
                </PopUp>
            </PopUpWrapper>
        </Container>
    );
};

export default Header;
