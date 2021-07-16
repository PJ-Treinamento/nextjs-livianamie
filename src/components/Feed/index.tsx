import { IPiu, IUser } from 'models';
import { Main } from './styles';
import NewPiu from '../NewPiu';
import Timeline from '../Timeline';

type ArrayPiuProps = {
    pius: IPiu[];
    setTimelinePius: (array: IPiu[]) => void;
    user: IUser;
};

const Feed: React.FC<ArrayPiuProps> = ({ pius, setTimelinePius, user }) => {
    return (
        <Main>
            <NewPiu user={user} pius={pius} setTimelinePius={setTimelinePius} />
            <Timeline
                user={user}
                pius={pius}
                setTimelinePius={setTimelinePius}
            />
        </Main>
    );
};

export default Feed;
