import styled from "styled-components"
import {BsArrowRight} from "react-icons/bs"


export const Container = styled.div`
    height: 100%;
    background: linear-gradient(to bottom, var(--color-yellow), #000);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h1{
      color: #fff;
      font-weight: bold;
    }
`
export const BoxForm = styled.div`
    width: 580px;
    height: 70%;
    background: #fff;
    padding: 40px 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    border-radius: 10px;
`
export const Form = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    border-radius: 10px;
`
export const InputBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;

    p{
      font-weight: bold;
      font-weight: 700;
      font-size: 18px;
    }
`
export const Input = styled.input`
    padding: 7px;
    background: #DEDEDE;
    border-radius: 5px 5px 0 0;
    border-bottom: 2px solid var(--color-yellow);
    height: 40px;

  &[type=number]::-webkit-inner-spin-button { 
    -webkit-appearance: none;
  }
  &[type=number] { 
   -moz-appearance: textfield;
   appearance: textfield;
  }

`


export const Button = styled.button`
    width: 110px;
    padding: 10px;
    background: var(--color-primary);
    border: none;
    color: #fff;
    outline: none;
    border-radius: 5px;
    transition: all .2s;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
    &:hover{
        background: #002c7e;
        width: 120px;
    }
`

export const ArrowRight = styled(BsArrowRight)`
  width: 17px;
  height: 17px;
  margin-left: 5px;
`


export const Textarea= styled.textarea`
  outline: none;
  width: 100%;
  resize: none;
  height: 60px;
  border-radius: 5px 5px 0 0;
  border: none;
  border-bottom: 2px solid var(--color-yellow);
  padding-left: 20px;
  padding-top: 20px;
  background: #DEDEDE;

`