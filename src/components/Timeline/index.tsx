import Piu from '../Piu';
import { TimelineWrapper, Tab, TimelineSections } from './styles';

const Timeline: React.FC = () => {
    return (
        <TimelineWrapper>
            <Tab>
                <TimelineSections>
                    <p id="pius-section">Pius</p>
                    <p>Pius e repostas</p>
                </TimelineSections>
                <input type="text" placeholder="Filtrar por usuário" />
            </Tab>
            <Piu />
            <Piu />
            <Piu />
            <Piu />
            <Piu />
            <Piu />
            <Piu />
            <Piu />
            <Piu />
            <Piu />
            <Piu />
        </TimelineWrapper>
    );
};

export default Timeline;
