import { PropsCard } from '../../utils/PropsCard'
import {
  Container,
  Imgteste,
  Title,
  IconArrow,
  Avatar
} from './styles'

interface Props{
  imgTeste?: string;
  name: string;
}

export function Atividades({
  imgTeste,
  name
}: Props){
  return(
    <Container>

      <div>

            
        {imgTeste   ? <Imgteste src={imgTeste}/> : <Avatar/> }
        
        
        <Title>{name}</Title>

      </div>
      

    

      <IconArrow/>
    </Container>
  )
}