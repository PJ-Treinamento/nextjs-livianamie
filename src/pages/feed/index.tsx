import { IPius } from 'models';
import { GetServerSideProps, NextPage } from 'next';
import { parseCookies } from 'nookies';
import { getApi } from 'services/axios';
import FeedTemplate from '../../template/Feed';

const Feed: NextPage<IPius> = ({ pius }) => {
    return <FeedTemplate pius={pius} />;
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
