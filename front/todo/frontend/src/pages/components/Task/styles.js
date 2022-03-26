import styled from 'styled-components';
import {AiOutlineCheckCircle} from 'react-icons/ai'

export const Container = styled.div`
  width: 490px;
  min-height: 55px;
  background: #DBE2EF;
  border-radius: 5px;   
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin: 20px 0;
`;


export const CheckIcon = styled(AiOutlineCheckCircle)`
  position: absolute;

  left: 0;
  width: 25px ;
  height: 25px;
  cursor: pointer;
  margin-left: 20px;

`
export const TaskTitle = styled.p`
  margin-left: 80px;
  padding: 20px 10px;
  
`
