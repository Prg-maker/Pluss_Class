import styled , {css}from "styled-components";
import {BsArrowRight , BsArrowDown} from 'react-icons/bs'

export const Container  = styled.div`
  height: 100vh ;
  
  display:flex ;
  justify-content:center ;
  align-items: center;

  .backgroundImage{
    object-fit: cover; 
    position: absolute ;
    height: 100% ;
    width: 100% ;
  }
  background: black ;

  
`


export const WrapperContainer = styled.div`
  z-index:2;

  background: var(--color-background-white) ;

  width: 500px;
  height: 85%;

  display: flex;
  flex-direction: column ;
  align-items: center ;
  border-radius: 35px ;

`  
export const Title = styled.h2`
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 36px;

  text-align: center;

  padding-top: 48px;
  padding-bottom:35px; 
`  
export const Form = styled.form`
  width: 100%;
  padding-left: 50px ;

  display:flex ;
  flex-direction: column ;
  >p{
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 27px;

  }

  .select{
    width: 80%;
    height: 45px;
    position: relative ;
    margin-bottom: 25px ;
  }





`  
const styleInputs = css`
  width:80% ;
  height: 45px;

  font-size: 18px;
  line-height: 27px;
  padding-left:20px ;

  border: 2px solid var(--color-gray);
  border-radius: 10px;

  margin: 20px 0 40px 0 ;
  &:focus{
    border: 2px solid #135FED;
  }
`

export const InputName = styled.input`
  ${styleInputs}
`  
export const InputClass = styled.input`
  ${styleInputs}

`

export const Button = styled.button`


  width: 120px;
  height: 50px;
  background: var(--color-primary);
  color: #fff;

  border-radius: 10px;
  transition: all .2s;
  cursor: pointer;
  padding: auto  20px;

  font-size: 17px;
  display:  flex;
  align-items: center ;
  justify-content:center ;
  position: relative ;
  top: 20px ;
  left: 270px ;
  &:hover{
      background: #002c7e;
      padding-left: 5px;
  }
`

export const ArrowRight = styled(BsArrowRight)`
  color: #fff;
  width:20px ;
  height:20px ;
  margin-left: 20px ;

`

export const WrapperSelect = styled.div``
export const SelectOption = styled.select`
  width: 100% ;
  height:100% ;
  border:none ;
  outline:none ;
  border-radius: 10px;
  font-size: 17px;
  line-height: 27px;
  padding: 0 20px ;
  -webkit-appearance: none;
  -moz-appearance:    none;
  appearance:         none;
  border: 2px solid #7A7A7A;
  background: var(--color-background-white);
  &:hover{
    border: 2px solid #135FED;
  }


  font-weight: normal;
  font-size: 18px;
  line-height: 27px;


 
`
export const ArrowDown = styled(BsArrowDown)`
  width:20px ;
  height:25px ;
  position: absolute ;
  z-index:10 ;

  top: 10px;
  right: 15px;
`