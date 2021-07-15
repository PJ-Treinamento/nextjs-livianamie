import Image from 'next/image';
import image from '../../../public/background.svg';
import { NewPiuWrapper, Text, Textarea, Counter, CounterValue } from './styles';

const NewPiu: React.FC = () => {
    return (
        <NewPiuWrapper>
            <Image src={image} alt="Foto de perfil" width={50} height={50} />
            <Text>
                <Textarea placeholder="O que você está pensando?" />
                <Counter>
                    <span>errosjdnkc</span>
                    <CounterValue>0</CounterValue>
                </Counter>
            </Text>
            <button type="submit">Piu</button>
        </NewPiuWrapper>
    );
};

export default NewPiu;
