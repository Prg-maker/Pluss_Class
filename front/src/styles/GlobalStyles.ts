import { createGlobalStyle } from 'styled-components'


export const GlobalStyles = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing: border-box;
  }

  *,button , input{
    font-family: 'Poppins', sans-serif;
  }

  html , body ,#root{
    height:100vh;
    overflow-y: none;

  }

  button, input {
    outline: none;
    border:none;
  }


  #root{
    --color-yellow: #FCA213;
    --color-primary: #13213B;
    --color-white: #E5E5E5;
    --color-gray: #BEBEBE;
    --color-black: #000000;
    --color-text-white: #fff;
    --color-background-white: #fff;
    --color-button: #135FED;
    --color-hover-button:#002c7e;
    --color-background-avatar:#C4C4C4
  }


  label{
    visibility: hidden ;
    position: absolute;
  }

`
