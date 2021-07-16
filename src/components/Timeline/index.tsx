import { IPiu, IUser } from 'models';
import { useState } from 'react';
import Piu from '../Piu';
import { TimelineWrapper, Tab, TimelineSections } from './styles';

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
                    <p id="pius-section">Pius</p>
                    <p>Pius e repostas</p>
                </TimelineSections>
                <input
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
