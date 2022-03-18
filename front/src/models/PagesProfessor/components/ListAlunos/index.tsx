import {
  Container
} from './styles'

import {User} from './components/User'

export function ListAlunos(){
  return(
    <Container>
      <User/>
      <User/>
      <User/>
      <User/>
      <User/>
    </Container>
  )
}