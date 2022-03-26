import {
  Container,
  CheckIcon,
  TaskTitle,

} from './styles'

export function Task(props){

  return(

    <Container>
      <CheckIcon/>
      <TaskTitle>{props.title}</TaskTitle>
    </Container>
   
  )
}