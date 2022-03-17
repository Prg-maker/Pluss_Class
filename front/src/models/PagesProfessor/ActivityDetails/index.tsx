import {
  Container
} from './styles'
import {DashBoardMobal}from '../components/DashBoardMobal'

import {Header} from '../components/Header'

export function  ActivityDetails(){
  return(
    <Container>
      <Header
        avatar='https://github.com/Prg-Maker.png'
        name='Daniel Fernandes Silva'
      />

      <DashBoardMobal/>
    </Container>
  )
}