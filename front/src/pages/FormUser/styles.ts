import styled , {css}from "styled-components";

import {
  BsArrowDown,
  BsArrowRight
} from '../../icons/IconsLogin/icons'

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
  height: 80%;





  display: flex;
  flex-direction: column ;
  align-items: center ;
  border-radius: 35px ;

  @media(max-width: 758px){
    width: 70%;
    height: 60%;

    *{
      font-size: 16px;
      
    }
  }

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
    margin-bottom: 20px;

  }

  .select{
    width: 80%;
    height: 45px;
    position: relative ;
    margin-bottom: 25px ;
    margin-bottom: 55px;
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

  margin: 20px 0 55px 0 ;
  &:focus{
    border: 2px solid var(--color-button);
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
  color: var(--color-text-white);

  border-radius: 10px;
  transition: all .2s;
  cursor: pointer;
  padding: auto  20px;

  font-size: 17px;
  display:  flex;
  align-items: center ;
  justify-content:center ;
  position: relative ;
  left: 270px ;
  &:hover{
    background:var(--color-hover-button);
    padding-left: 5px;
  }




  
`

export const ArrowRight = styled(BsArrowRight)`
  color: var(--color-text-white);
  width:20px ;
  height:20px ;
  margin-left: 20px ;

`

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

  border: 2px solid var(--color-gray);

  background: var(--color-background-white);
  &:hover{
    border: 2px solid var(--color-button);
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