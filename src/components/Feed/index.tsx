import { IPiu } from 'models';
import { Main } from './styles';
import NewPiu from '../NewPiu';
import Timeline from '../Timeline';

type ArrayPiuProps = {
    pius: IPiu[];
    setTimelinePius: (array: IPiu[]) => void;
};

const Feed: React.FC<ArrayPiuProps> = ({ pius, setTimelinePius }) => {
    return (
        <Main>
            <NewPiu />
            <Timeline pius={pius} setTimelinePius={setTimelinePius} />
        </Main>
    );
};

export default Feed;
