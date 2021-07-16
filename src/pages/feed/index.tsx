import { IPiu, IPius, IUser } from 'models';
import { GetServerSideProps, NextPage } from 'next';
import { parseCookies } from 'nookies';
import { useState } from 'react';
import { getApi } from 'services/axios';
import FeedTemplate from '../../template/Feed';

type FeedProps = {
    pius: IPiu[];
    user: IUser;
    users: IUser[];
};

const Feed: NextPage<FeedProps> = ({ pius, user, users }) => {
    const [timelinePius, setTimelinePius] = useState<IPiu[]>(pius);

    return (
        <FeedTemplate
            user={user}
            users={users}
            pius={timelinePius}
            setTimelinePius={setTimelinePius}
        />
    );
};

export default Feed;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const api = getApi();
    const { '@Piupiuwer:token': token } = parseCookies(ctx);
    const { '@Piupiuwer:username': username } = parseCookies(ctx);

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
            Authorization: `Bearer ${token}`
        }
    });
    const userResponse = await api.get(`/users?username=${username}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    const usersListResponse = await api.get('/users', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    const pius: IPius = response.data;
    const user: IUser = userResponse.data[0];
    const users: IUser[] = usersListResponse.data;

    return {
        props: {
            pius,
            user,
            users
        }
    };
};
