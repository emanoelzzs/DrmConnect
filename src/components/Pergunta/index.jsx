import { Link } from 'react-router-dom';
import Titulo from './elements/Titulo';
import User from './elements/User';

export default function Pergunta({ titulo, user, userAvatar }){
    return(
        <div className='card-Pergunta'>
            <User user_avatar={userAvatar}>{user}</User>
            <Titulo>{titulo}</Titulo>
        </div>
    )
}