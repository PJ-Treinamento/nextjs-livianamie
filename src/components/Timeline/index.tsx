import { IPiu, IPius } from 'models';
import { useState } from 'react';
import Piu from '../Piu';
import { TimelineWrapper, Tab, TimelineSections } from './styles';

const Timeline: React.FC<IPius> = ({ pius }) => {
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
                    return <Piu key={piu.id} piu={piu} />;
                }
                return <></>;
            })}
        </TimelineWrapper>
    );
};

export default Timeline;
