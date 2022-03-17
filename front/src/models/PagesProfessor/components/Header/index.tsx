import {
  Logo,
  Pluss,
  Name,
  Container
} from './styles'

interface Props {
  name: string;
  avatar: string;
}

import PlussClassSvg from '../../assets/Pluss+Class_Logo.svg'
import { Link } from 'react-router-dom';

export function Header({name, avatar}: Props){
  return(
    <Container>
      <Link to={'/'}>
        <Logo src={PlussClassSvg} alt="Pluss + Class" />
      </Link>

      <div>
        <Pluss/>

        <Name>{name}</Name>


        <img src={avatar} alt={name} />
      </div>
   
    </Container>
  )
}