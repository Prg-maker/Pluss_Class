import {
  Logo,
  Pluss,
  Name,
  Container
} from './styles'



import PlussClassSvg from '../../assets/Pluss+Class_Logo.svg'

export function Header(){
  return(
    <Container>
      
      <Logo src={PlussClassSvg} alt="Pluss + Class" />

      <div>
        <Pluss/>

        <Name>Daniel Fernades</Name>


        <img src="https://github.com/Prg-Maker.png" alt="" />
      </div>
   
    </Container>
  )
}