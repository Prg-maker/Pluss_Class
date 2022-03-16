import {Container , DashBoardMobal , Pluss} from './styles'

import {Header} from '../components/Header'

export function  DashBoard(){
  return(
    <Container>
      <Header/>

      <DashBoardMobal>
      <Pluss/>


      </DashBoardMobal>

    </Container>
  )
}