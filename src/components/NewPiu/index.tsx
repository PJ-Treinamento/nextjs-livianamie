import { IPiu, IUser } from 'models';
import { parseCookies } from 'nookies';
import { useEffect, useState } from 'react';
import api from 'services/api';
import {
    NewPiuWrapper,
    ProfilePicture,
    Text,
    Textarea,
    Counter,
    CounterValue
} from './styles';
import ProfileImage from '../../../public/profile.svg';

type PiuProps = {
    pius: IPiu[];
    setTimelinePius: (array: IPiu[]) => void;
    user: IUser;
};

const NewPiu: React.FC<PiuProps> = ({ pius, setTimelinePius, user }) => {
    const { '@Piupiuwer:token': token } = parseCookies();
    const [newPiuText, setNewPiuText] = useState('');
    const [counterErrorText, setCounterErrorText] = useState('');
    const [isWrong, setIsWrong] = useState(false);

    let profileImage = user.photo;
    if (profileImage === '.....') profileImage = ProfileImage;

    const handleNewPiu = async () => {
        const response = await api.post(
            '/pius',
            {
                text: newPiuText
            },
            {
                headers: {
                    Authorization: `Bearer: ${token}`
                }
            }
        );
        const newPiu: IPiu = {
            id: response.data.id,
            user,
            likes: [],
            text: newPiuText.trim(),
            created_at: response.data.created_at,
            updated_at: response.data.updated_at
        };

        setTimelinePius([newPiu, ...pius]);
        setNewPiuText('');
    };

    useEffect(() => {
        if (newPiuText.trim().length > 140) {
            setCounterErrorText('* Não ultrapasse o limite de caracteres');
            setIsWrong(true);
        } else {
            setCounterErrorText('');
            setIsWrong(false);
        }
    }, [newPiuText, newPiuText.length]);

    return (
        <NewPiuWrapper>
            <ProfilePicture
                src={profileImage || ProfileImage}
                alt="Foto de perfil"
                width={80}
                height={80}
            />
            <Text>
                <Textarea
                    isWrong={isWrong}
                    onChange={(e) => {
                        setNewPiuText(e.target.value);
                    }}
                    value={newPiuText}
                    placeholder="O que você está pensando?"
                />
                <Counter>
                    <span>{counterErrorText}</span>
                    <CounterValue isWrong={isWrong}>
                        {newPiuText.trim().length}
                    </CounterValue>
                </Counter>
            </Text>
            <button
                type="submit"
                onClick={() => {
                    if (
                        newPiuText.trim().length < 1 ||
                        newPiuText.trim().length > 140
                    ) {
                        // eslint-disable-next-line no-useless-return
                        return;
                        // eslint-disable-next-line no-else-return
                    } else {
                        handleNewPiu();
                    }
                }}
            >
                Piu
            </button>
        </NewPiuWrapper>
    );
};

export default NewPiu;
