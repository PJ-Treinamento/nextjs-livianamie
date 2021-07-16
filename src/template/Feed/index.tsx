import { IPiu, IUser } from 'models';
import Header from '../../components/Header';
import Feed from '../../components/Feed';
import BottomMenu from '../../components/BottomMenu';
import SideMenu from '../../components/SideMenu';

import { Container, Wrapper, MiddleWrapper } from './styles';

type ArrayPiuProps = {
    pius: IPiu[];
    setTimelinePius: (array: IPiu[]) => void;
    user: IUser;
    users: IUser[];
};

const FeedTemplate: React.FC<ArrayPiuProps> = ({
    pius,
    setTimelinePius,
    user,
    users
}) => {
    return (
        <Container>
            <Wrapper>
                <Header users={users} />
                <MiddleWrapper>
                    <Feed
                        user={user}
                        pius={pius}
                        setTimelinePius={setTimelinePius}
                    />
                    <SideMenu user={user} />
                </MiddleWrapper>
                <BottomMenu />
            </Wrapper>
        </Container>
    );
};

export default FeedTemplate;
