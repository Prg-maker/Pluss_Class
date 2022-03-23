import {
  Logo,
  Pluss,
  Name,
  Container,
  Avatar
} from './styles'

interface Props {
  name: string;
  avatar: string;
  create?: string;
}

import PlussClassSvg from '../../assets/Pluss+Class_Logo.svg'
import { Link } from 'react-router-dom';

export function Header({name, avatar , create  }: Props){
  return(
    <Container>
      <Link to={'/'}>
        <Logo src={PlussClassSvg} alt="Pluss + Class" />
      </Link>

      <div>
        
        <Link to={'/admin/create'}>
          {create && <Pluss>{create}</Pluss>}
        </Link>

        <Name>{name}</Name>

        
        {avatar? <img src={avatar} alt={name} />  : <Avatar/>}
      </div>
   
    </Container>
  )
}