import Image from 'next/image';
import image from '../../../public/background.svg';
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

const Piu: React.FC = () => {
    return (
        <PiuWrapper>
            <Image src={image} alt="Foto de perfil" width={50} height={50} />
            <PiuContent>
                <TopContent>
                    <UserInfos>
                        <strong>Lívia Namie</strong>
                        <span>@livianamie_</span>
                    </UserInfos>
                    <DotsIcon />
                </TopContent>

                <p>
                    Loskjdc ksdc sdjcs sj js dscjdncjdncjs djcnjdsncksd
                    cdskcjsdkckscds cdskncksjdcksdjc cdcjdncjadncksjdncs
                    cdscjsdncksjcnsdc sdjcnsdkcjnsdkc sdjcnskdjcnskdc
                </p>

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
