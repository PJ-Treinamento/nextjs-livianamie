import { IPius } from 'models';
import { Main } from './styles';
import NewPiu from '../NewPiu';
import Timeline from '../Timeline';

const Feed: React.FC<IPius> = ({ pius }) => {
    return (
        <Main>
            <NewPiu />
            <Timeline pius={pius} />
        </Main>
    );
};

export default Feed;
