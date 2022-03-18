import {
  Container,
  Description,
  Turma,
  TitleClass
} from './styles'

import {PropsCard} from '../../utils/PropsCard'

export function CardActivy({
  name,
  turma,
  description
}:PropsCard){
  return(
    <Container>
      <TitleClass>English</TitleClass>
      <Description>Testes de inglês da escola (xxxx)</Description>
      <Turma>3° Ano A</Turma>
    </Container>
  )
}