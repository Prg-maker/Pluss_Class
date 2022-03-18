import {
  Container,
  WrapperContainer
} from './styles'
import {DashBoardMobal}from '../components/DashBoardMobal'

import {Header} from '../components/Header'
import {CardActivy} from '../components/CardActivy'
import {Atividades} from '../components/Atividades'
import { ListAlunos } from '../components/ListAlunos'


export function  ProferssorActivityDetails(){
  return(
    <Container>
      <Header
        avatar='https://github.com/Prg-Maker.png'
        name='Daniel Fernandes Silva'
      />

      <WrapperContainer>

        <div className="left">
          
          <CardActivy
            name='dasdsa'
            turma='dsadsa'
          />
          
          <Atividades
            name='Teste de Inglês  #01'
          />

          <Atividades
            imgTeste='https://github.com/Prg-Maker.png'
            name='Teste de Inglês  #02'
          />
          <Atividades
            imgTeste='https://github.com/Prg-Maker.png'
            name='Teste de Inglês  #03'
          />
          <Atividades
            imgTeste='https://github.com/Prg-Maker.png'
            name='Teste de Inglês  #04'
          />

          

        </div>


        <div  className="rigth">
          
          <ListAlunos/>

        </div>
        
      </WrapperContainer>
      <DashBoardMobal/>
    </Container>
  )
}