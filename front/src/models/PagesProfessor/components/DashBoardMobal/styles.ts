import styled from "styled-components";

import {HiPlusSm} from 'react-icons/hi'



export const Container = styled.div`

  display: none;


  @media(max-width:780px){
    display: flex;
    width: 100%;
    position: fixed;
    bottom: 0;
    background: var(--color-background-white);
    padding: 10px 0 ;
    justify-content: center;

  }
`

export const Pluss = styled(HiPlusSm)`
  width: 25px;
  height: 25px;
  border: 2px solid black;
  border-radius: 7px;
  cursor:pointer;
  transition: opacity .2s;

`
