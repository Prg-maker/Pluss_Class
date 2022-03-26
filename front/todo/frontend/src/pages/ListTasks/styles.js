import styled from 'styled-components';

export const Container = styled.div`
  width: 600px;
  min-height: 450px;
  background: #fff;
  box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.25);
  border-radius: 20px; 
  
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 57px 0;
  overflow-y: auto;
`;

export const Title = styled.h1`
  font-weight: 400;
  font-size: 40px;
  line-height: 46px;
  color: #112D4E;
  margin-top: 20px;
  margin-bottom: 10px;
` 

export const  Button = styled.button`
  height: 32px;
  cursor: pointer;
  padding: 5px;
  background: #3F72AF;
  color: white;
  border-radius: 4px;
  transition: .2s;
  &:hover{
    filter: brightness(0.9);
  }
`


export const Separete = styled.div`
  width: 90%;
  opacity: 0.2;
  margin-top: 15px;
  border-bottom: 2px solid black;
`


export const  ContentTask = styled.div`
  margin-top: 20px;
`


