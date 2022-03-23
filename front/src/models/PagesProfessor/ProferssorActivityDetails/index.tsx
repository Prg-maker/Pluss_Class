import {
  Container,
  WrapperContainer
} from './styles'
import {DashBoardMobal}from '../components/DashBoardMobal'

import {Header} from '../components/Header'
import {CardActivy} from '../components/CardActivy'
import {Atividades} from '../components/Atividades'
import { ListAlunos } from '../components/ListAlunos'
import { useParams } from 'react-router-dom'


export function  ProferssorActivityDetails(){

  const params = useParams()

  const materia = params.materia as string
  const turma = params.turma as string

  return(
    <Container>
      <Header
        create='criar nova tarefa'
        avatar='https://github.com/Prg-Maker.png'
        name='Daniel Fernandes Silva'
      />

      <WrapperContainer>

        <div className="left">
          
          <CardActivy
            name={materia}
            turma={turma}
            description='Testes de inglês da escola (xxxx)'
          />
          
          <Atividades
            name={materia}
          />

          <Atividades
            imgTeste='https://github.com/Prg-Maker.png'
            name={materia}

          />
          <Atividades
            imgTeste='https://github.com/Prg-Maker.png'
            name={materia}

          />
          <Atividades
            imgTeste='https://github.com/Prg-Maker.png'
            name={materia}
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