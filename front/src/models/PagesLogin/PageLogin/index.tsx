import { Container, Title, Button, IconGoogle, IconGithub } from './styles'

import PersonPng from './assents/person.png'
import PlussClassSvg from './assents/Pluss+Class_Logo.svg'



export function PageLogin() {





  return (
    <Container>
      <img className="person" src={PersonPng} alt="estudar para um futuro" />


      <div className="left">
        <img src={PlussClassSvg} alt="Pluss + Class" />

        <Title>Entrar com...</Title>

        <Button >
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
