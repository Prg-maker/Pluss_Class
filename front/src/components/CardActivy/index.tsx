import {
  Container,
  Description,
  Turma,
  TitleClass
} from './styles'

import {PropsCard} from '../../Props/PagesProfessor/utils/PropsCard'

export function CardActivy({
  name,
  turma,
  description
}:PropsCard){
  return(
    <Container>
      <TitleClass>{name}</TitleClass>
      <Description>{description}</Description>
      <Turma>{turma}</Turma>
    </Container>
  )
}