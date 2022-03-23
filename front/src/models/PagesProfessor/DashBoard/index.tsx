import {Container  , Main} from './styles'

import {Header} from '../components/Header'
import { Card } from '../components/Card'

import {DashBoardMobal}from '../components/DashBoardMobal'

export function  DashBoard(){
  const name = "Daniel"

  return(
    <Container>
      <Header
        avatar='https://github.com/Prg-Maker.png'
        name='Daniel Fernandes Silva'
      />


      <Main>
        <h2>Suas Salas {name}</h2>
        

        <div className='Cards'>

        <Card
          name='Geografia
          '
          description='Testes de inglês da escola (xxxx)'
          turma='3° Ano A'        
        />
        <Card
          name='matematica'
          description='Testes de inglês da escola (xxxx)'
          turma='3° Ano A'        
        />
         <Card
          name='Portugues'
          description='Testes de inglês da escola (xxxx)'
          turma='3° Ano A'        
        />
         <Card
          name='English'
          description='Testes de inglês da escola (xxxx)'
          turma='3° Ano A'        
        />


     
        </div>

       
        

      </Main>

      <DashBoardMobal/>

    </Container>
  )
}