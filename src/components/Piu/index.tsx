import { IPiu } from 'models';
import { parseCookies } from 'nookies';
import { useCallback } from 'react';
import { getApi } from 'services/axios';
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
};

const Piu: React.FC<PiuProps> = ({ pius, setTimelinePius, piu }) => {
    const api = getApi();
    const { id } = piu;
    const { '@Piupiuwer:token': token } = parseCookies();
    const { '@Piupiuwer:username': username } = parseCookies();

    let profileImage = piu.user.photo;
    if (profileImage === '.....') profileImage = ProfileImage;

    const handleDelete = useCallback(() => {
        pius.forEach(async (piuApi: IPiu, index) => {
            if (id === piuApi.id) {
                const newPiusArray = [...pius];
                newPiusArray.splice(index, 1);
                setTimelinePius(newPiusArray);
                await api.delete('/pius', {
                    data: { piu_id: piuApi.id },
                    headers: {
                        Authorization: `Beares: ${token}`
                    }
                });
            }
        });
    }, [api, id, pius, setTimelinePius, token]);

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
                        <LikeIcon />0
                    </Status>
                    <FavoriteIcon />
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
