import {
  Container
} from './styles'

import {User} from './components/User'

export function ListAlunos(){
  return(
    <Container>
      <User
        avatar='https://github.com/Prg-maker.png'
        name='Daniel Fernades'
      />


      <User
        avatar='https://github.com/Prg-maker.png'
        name='Daniel'
      />



      <User
        avatar='https://github.com/Prg-maker.png'
        name='Daniel'
      />


      <User
        avatar='https://github.com/Prg-maker.png'
        name='Daniel'
      />

  
    </Container>
  )
}