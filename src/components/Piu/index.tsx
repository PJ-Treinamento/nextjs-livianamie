import { IPiu } from 'models';
import Image from 'next/image';
import ProfileImage from '../../../public/profile.svg';
import {
    PiuWrapper,
    PiuContent,
    TopContent,
    UserInfos,
    DotsIcon,
    Interactions,
    Status,
    CommentIcon,
    RepiuIcon,
    LikeIcon,
    FavoriteIcon,
    ShareIcon,
    TrashIcon
} from './styles';

type PiuProps = {
    piu: IPiu;
};

const Piu: React.FC<PiuProps> = ({ piu }) => {
    let profileImage = piu.user.photo;
    if (profileImage === '.....') profileImage = ProfileImage;

    return (
        <PiuWrapper>
            <Image
                src={profileImage || ProfileImage}
                alt="Foto de perfil"
                width={50}
                height={50}
            />
            <PiuContent>
                <TopContent>
                    <UserInfos>
                        <strong>
                            {piu.user.first_name} {piu.user.last_name}
                        </strong>
                        <span>@{piu.user.username}</span>
                    </UserInfos>
                    <DotsIcon />
                </TopContent>

                <p>{piu.text} </p>

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
                    <TrashIcon />
                    <ShareIcon />
                </Interactions>
            </PiuContent>
        </PiuWrapper>
    );
};

export default Piu;
