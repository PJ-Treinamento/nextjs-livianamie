import { IPiu, IUser } from 'models';
import { useState } from 'react';
import Piu from '../Piu';
import {
    TimelineWrapper,
    Tab,
    TabInput,
    TimelineSections,
    Section
} from './styles';

type ArrayPiuProps = {
    pius: IPiu[];
    setTimelinePius: (array: IPiu[]) => void;
    user: IUser;
};

const Timeline: React.FC<ArrayPiuProps> = ({ pius, setTimelinePius, user }) => {
    const [search, setSearch] = useState('');

    return (
        <TimelineWrapper>
            <Tab>
                <TimelineSections>
                    <Section id="pius-section">Pius</Section>
                    <Section>Pius e repostas</Section>
                </TimelineSections>
                <TabInput
                    type="text"
                    onChange={(e) => {
                        setSearch(e.target.value);
                    }}
                    value={search}
                    placeholder="Filtrar por usuário"
                />
            </Tab>
            {pius.map((piu: IPiu) => {
                if (
                    search === '' ||
                    piu.user.username
                        .toLowerCase()
                        .includes(search.toLowerCase()) ||
                    piu.user.first_name
                        .toLowerCase()
                        .includes(search.toLowerCase()) ||
                    piu.user.last_name
                        .toLowerCase()
                        .includes(search.toLowerCase())
                ) {
                    return (
                        <Piu
                            user={user}
                            key={piu.id}
                            pius={pius}
                            setTimelinePius={setTimelinePius}
                            piu={piu}
                        />
                    );
                }
                return <></>;
            })}
        </TimelineWrapper>
    );
};

export default Timeline;
