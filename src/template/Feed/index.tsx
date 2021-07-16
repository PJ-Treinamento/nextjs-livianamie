import { IPiu } from 'models';
import Header from '../../components/Header';
import Feed from '../../components/Feed';
import BottomMenu from '../../components/BottomMenu';
import SideMenu from '../../components/SideMenu';

import { Container, Wrapper, MiddleWrapper } from './styles';

type ArrayPiuProps = {
    pius: IPiu[];
    setTimelinePius: (array: IPiu[]) => void;
};

const FeedTemplate: React.FC<ArrayPiuProps> = ({ pius, setTimelinePius }) => {
    return (
        <Container>
            <Wrapper>
                <Header />
                <MiddleWrapper>
                    <Feed pius={pius} setTimelinePius={setTimelinePius} />
                    <SideMenu />
                </MiddleWrapper>
                <BottomMenu />
            </Wrapper>
        </Container>
    );
};

export default FeedTemplate;
