import Header from '../../components/Header';
import Feed from '../../components/Feed';
import BottomMenu from '../../components/BottomMenu';
import SideMenu from '../../components/SideMenu';

import { Container, Wrapper, MiddleWrapper } from './styles';

const FeedTemplate: React.FC = () => {
    return (
        <Container>
            <Wrapper>
                <Header />
                <MiddleWrapper>
                    <Feed />
                    <SideMenu />
                </MiddleWrapper>
                <BottomMenu />
            </Wrapper>
        </Container>
    );
};

export default FeedTemplate;
