import { Link } from "react-router-dom";
import { Task } from "../components/Task";
import { Container , Title , Separete , ContentTask , Button } from "./styles";

export function ListTasks(){
  return(
    <Container>
      <Title>To do App</Title>


      <Link to="/">
        <Button>create new task</Button>
      </Link>


      <Separete/>

      <ContentTask>

        <Task
          title='lEu tenho um banco de dados do Firebase vinculado a dois aplicativos, um sendo um aplicativo iOS e outro sendo um aplicativo da web codificado em node.js, que é um algoritmo básico que define dados para o banco de dados. Sempre que estou executando o algoritmo, sou confrontado comorem'
        />    

        
        <Task
          title='lEu tenho um banco de dados do Firebase vinculado a dois aplicativos, um sendo um aplicativo iOS e outro sendo um aplicativo da web codificado em node.js, que é um algoritmo básico que define dados para o banco de dados. Sempre que estou executando o algoritmo, sou confrontado comorem'
        />   
       

       <Task
          title='lEu tenho um banco de dados do Firebase vinculado a dois aplicativos, um sendo um aplicativo iOS e outro sendo um aplicativo da web codificado em node.js, que é um algoritmo básico que define dados para o banco de dados. Sempre que estou executando o algoritmo, sou confrontado comorem'
        />   

      </ContentTask>


    </Container>
  )
}