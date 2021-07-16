import { IPiu, IPius } from 'models';
import { GetServerSideProps, NextPage } from 'next';
import { parseCookies } from 'nookies';
import { useState } from 'react';
import { getApi } from 'services/axios';
import FeedTemplate from '../../template/Feed';

const Feed: NextPage<IPius> = ({ pius }) => {
    const [timelinePius, setTimelinePius] = useState<IPiu[]>(pius);

    return (
        <FeedTemplate pius={timelinePius} setTimelinePius={setTimelinePius} />
    );
};

export default Feed;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const api = getApi();
    const { '@Piupiuwer:token': token } = parseCookies(ctx);

    if (!token) {
        return {
            redirect: {
                destination: '/login',
                permanent: false
            }
        };
    }
    const response = await api.get('/pius', {
        headers: {
            Authorization: `Beares: ${token}`
        }
    });
    const pius: IPius = response.data;

    return {
        props: {
            pius
        }
    };
};
