import {
  Container, 
  WrapperContainer, 
  Title, 
  Form, 
  InputName, 
  InputClass, 
  Button, 
  ArrowRight,
  SelectOption,
  ArrowDown

} from './styles'


export function FormUser(){
  return(
    <Container>
      

      <WrapperContainer>
        <Title>Preencha os dados</Title>

        <Form>
          <p>Como você quer ser chamado?</p>


          <label htmlFor="">nickname</label>
          <InputName  type="text" placeholder='Nickname'/>


            <div className='select'>
            <ArrowDown/>

            <SelectOption>
              <option selected>Selecione uma das opções </option>
              <option value="professor">Professor</option>
              <option value="aluno">Aluno</option>
            </SelectOption>
            </div>

            <InputClass type="text" placeholder='Nome da sala'/>

          <Button>Próximo<ArrowRight/></Button>

        </Form>

      </WrapperContainer>

    </Container>
  )
}