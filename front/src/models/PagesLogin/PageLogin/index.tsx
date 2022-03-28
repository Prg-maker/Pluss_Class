import { Container, Title, Button, IconGoogle, IconGithub } from './styles'

import PersonPng from './assents/person.png'
import PlussClassSvg from './assents/Pluss+Class_Logo.svg'

import {GoogleAuthProvider , getAuth} from 'firebase/auth'



export function PageLogin() {


  const provider = new GoogleAuthProvider()
  const auth = getAuth()

  async function handleSingIn(){

    


  }


  return (
    <Container>
      <img className="person" src={PersonPng} alt="estudar para um futuro" />


      <div className="left">
        <img src={PlussClassSvg} alt="Pluss + Class" />

        <Title>Entrar com...</Title>

        <Button onClick={handleSingIn}>
          <IconGoogle />
          Google
        </Button>

        <Button className="github">
          <IconGithub />
          Github
        </Button>


      </div>

    </Container>
  )

}
