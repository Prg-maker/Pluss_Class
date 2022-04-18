import {Container, Form, InputBox, Input, BoxForm , Button , ArrowRight , Textarea} from "./styles"

export function CreateClass(){
    return (
        <Container>
            <h1>Criar nova sala</h1>

            <BoxForm className="containerForm">
                <Form>
                    <InputBox>
                        <label htmlFor="title">Titulo da sala</label>
                        <p>Titulo da sala</p>
                        <Input type="text"/>
                    </InputBox>
                    <InputBox>
                        <label htmlFor="materia">Matéria</label>
                        <p>Matéria</p>
                        <Input type="text"/>
                    </InputBox>
                    <InputBox>
                        <label htmlFor="description">Descrição</label>
                        <p>Descrição</p>
                        <Textarea placeholder="max: 50 caracteres"/>
                    </InputBox>
                    <InputBox>
                        <label htmlFor="quanti">Quantidade máxima de alunos</label>
                        <p>Quantidade máxima de alunos</p>
                        <Input type="number"/>
                    </InputBox>

                    <Button>Próximo<ArrowRight/></Button>
                </Form>
            </BoxForm>
        </Container>
    )
}