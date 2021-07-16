import { IPius } from 'models';
import Header from '../../components/Header';
import Feed from '../../components/Feed';
import BottomMenu from '../../components/BottomMenu';
import SideMenu from '../../components/SideMenu';

import { Container, Wrapper, MiddleWrapper } from './styles';

const FeedTemplate: React.FC<IPius> = ({ pius }) => {
    return (
        <Container>
            <Wrapper>
                <Header />
                <MiddleWrapper>
                    <Feed pius={pius} />
                    <SideMenu />
                </MiddleWrapper>
                <BottomMenu />
            </Wrapper>
        </Container>
    );
};

export default FeedTemplate;
