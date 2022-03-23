
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

import {PropsCard} from '../../utils/PropsCard'


export function Card({
  name,
  description,
  turma
}: PropsCard){
  console.log(name)

  return(
    <Container>
      <Header>
        <ContentWrapperHeader>
          <TitleClass>{name}</TitleClass>
          <Description>{description}</Description>
          <Turma>{turma}</Turma>
        </ContentWrapperHeader>

        <Link to={`/dashboard/admin/daniel/${name}/${turma}/446`}>
          <IconTreePoints/>
        </Link>
      </Header>
    </Container>
  )
}