import {
  Container, 
  WrapperContainer, 
  Title, 
  Form, 
  InputName, 
  InputClass, 
  Button, 
  ArrowRight,
  WrapperSection,
  SelecOption,
  ArrowDown

} from './styles'

import BackgroundPicture from './assets/backgroundPhoto.svg'

export function FormUser(){
  return(
    <Container>
      

      <WrapperContainer>
        <Title>Preencha os dados</Title>

        <Form>
          <p>Como você quer ser chamado</p>


          <label htmlFor="">nickname</label>
          <InputName  type="text" placeholder='Nickname'/>

          <WrapperSection>
              <SelecOption>
                <option selected>Selecione uma das opções  <ArrowDown/></option>
                <option value="professor">Professor</option>
                <option value="aluno">Aluno</option>
              </SelecOption>
          </WrapperSection>

            <InputClass type="text" placeholder='Nome da sala'/>

          <Button>Próximo<ArrowRight/></Button>

        </Form>

      </WrapperContainer>

    </Container>
  )
}