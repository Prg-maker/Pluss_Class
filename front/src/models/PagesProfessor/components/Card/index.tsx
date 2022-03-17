
import { Link } from 'react-router-dom';
import {
  Container,
  Header,
  ContentWrapperHeader,
  TitleClass,
  Description,
  Turma,
  IconTreePoints,
} from './styles'

interface Props{
  name: string;
  description?: string;
  turma: string;

}


export function Card({
  name,
  description,
  turma
}: Props){
  return(
    <Container>
      <Header>
        <ContentWrapperHeader>
          <TitleClass>{name}</TitleClass>
          <Description>{description}</Description>
          <Turma>{turma}</Turma>
        </ContentWrapperHeader>

        <Link to='/dashboard/admin/:daniel/:446'>
          <IconTreePoints/>
        </Link>
      </Header>
    </Container>
  )
}