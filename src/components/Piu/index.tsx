import { IPiu, IUser } from 'models';
import { parseCookies } from 'nookies';
import { useCallback, useEffect, useMemo, useState } from 'react';
import api from 'services/api';
import ProfileImage from '../../../public/profile.svg';
import {
    PiuWrapper,
    ProfilePictureWrapper,
    ProfilePicture,
    PiuContent,
    TopContent,
    UserInfos,
    UserNames,
    UserUsername,
    DotsIcon,
    PiuText,
    Interactions,
    Status,
    CommentIcon,
    RepiuIcon,
    LikeIcon,
    FavoriteIcon,
    TrashIcon
} from './styles';

type PiuProps = {
    pius: IPiu[];
    setTimelinePius: (array: IPiu[]) => void;
    piu: IPiu;
    user: IUser;
};

const Piu: React.FC<PiuProps> = ({ pius, setTimelinePius, piu, user }) => {
    const { id } = piu;
    const { '@Piupiuwer:token': token } = parseCookies();
    const { '@Piupiuwer:username': username } = parseCookies();
    const [likeCount, setLikeCount] = useState(piu.likes.length);
    const [likeStatus, setLikeStatus] = useState<boolean>();
    const [favoriteStatus, setFavoriteStatus] = useState<boolean>();

    let profileImage = piu.user.photo;
    if (profileImage === '.....') profileImage = ProfileImage;

    const likedPiusId = useMemo(() => {
        const likedPius = pius.filter((piuApi) => {
            const likedPiusUsername = piuApi.likes.map(
                (users) => users.user.username
            );
            return likedPiusUsername.includes(user.username);
        });
        return likedPius.map((piuLike) => piuLike.id);
    }, [pius, user.username]);

    const favoritedPiusId = useMemo(() => {
        return user.favorites.map((favoritedPiu) => favoritedPiu.id);
    }, [user.favorites]);

    const handleFavorite = useCallback(() => {
        pius.forEach((piuApi: IPiu) => {
            if (id === piuApi.id) {
                if (favoriteStatus === true) {
                    const unfavorite = async () => {
                        setFavoriteStatus(false);
                        await api.post(
                            '/pius/unfavorite',
                            { piu_id: piuApi.id },
                            { headers: { Authorization: `Bearer ${token}` } }
                        );
                    };
                    unfavorite();
                } else {
                    const favorite = async () => {
                        await api.post(
                            '/pius/favorite',
                            { piu_id: piuApi.id },
                            { headers: { Authorization: `Bearer ${token}` } }
                        );
                        setFavoriteStatus(true);
                    };
                    favorite();
                }
            }
        });
        return favoriteStatus;
    }, [favoriteStatus, id, pius, token]);

    useEffect(() => {
        setLikeStatus(likedPiusId.includes(piu.id));
        setFavoriteStatus(favoritedPiusId.includes(piu.id));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleLike = useCallback(() => {
        pius.forEach(async (piuApi: IPiu) => {
            if (id === piuApi.id) {
                const response = await api.post(
                    '/pius/like',
                    {
                        piu_id: piuApi.id
                    },
                    {
                        headers: {
                            Authorization: `Bearer: ${token}`
                        }
                    }
                );
                const { operation } = response.data;

                if (operation === 'like') {
                    setLikeCount(likeCount + 1);
                    setLikeStatus(true);
                } else {
                    setLikeCount(likeCount - 1);
                    setLikeStatus(false);
                }
            }
        });
    }, [pius, id, token, likeCount]);

    const handleDelete = useCallback(() => {
        pius.forEach(async (piuApi: IPiu, index) => {
            if (id === piuApi.id) {
                const newPiusArray = [...pius];
                newPiusArray.splice(index, 1);
                setTimelinePius(newPiusArray);
                await api.delete('/pius', {
                    data: { piu_id: piuApi.id },
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
            }
        });
    }, [id, pius, setTimelinePius, token]);

    return (
        <PiuWrapper>
            <ProfilePictureWrapper>
                <ProfilePicture
                    src={profileImage || ProfileImage}
                    alt="Foto de perfil"
                    width={60}
                    height={60}
                />
            </ProfilePictureWrapper>
            <PiuContent>
                <TopContent>
                    <UserInfos>
                        <UserNames>
                            {piu.user.first_name} {piu.user.last_name}
                        </UserNames>
                        <UserUsername>@{piu.user.username}</UserUsername>
                    </UserInfos>
                    <DotsIcon />
                </TopContent>

                <PiuText>{piu.text}</PiuText>

                <Interactions>
                    <Status>
                        <CommentIcon />0
                    </Status>
                    <Status>
                        <RepiuIcon />
                        12
                    </Status>
                    <Status>
                        <LikeIcon isLiked={likeStatus} onClick={handleLike} />{' '}
                        {likeCount}
                    </Status>
                    <FavoriteIcon
                        isFavorited={favoriteStatus}
                        onClick={handleFavorite}
                    />
                    {piu.user.username === username ? (
                        <TrashIcon onClick={handleDelete} />
                    ) : (
                        // <ShareIcon />
                        <></>
                    )}
                </Interactions>
            </PiuContent>
        </PiuWrapper>
    );
};

export default Piu;
