import styled from "styled-components";

export const Container = styled.div`

  width: 100%;
  height: 100%;
  background: var(--color-white);
  

  @media(max-width:780px){
    height: auto;

  }
  

`
export const Main = styled.div`
  margin-left: 31px;
  margin-top: 31px;
  
  
  h2{
    font-style: normal;
    font-weight: 500;
    font-size: 30px;
    line-height: 54px;
  }  

  .Cards{
    display: grid;
    grid-template-columns: auto auto auto ;
    grid-template-rows: auto auto;
  }


  @media(max-width:780px){
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0;

    h2{
      font-size: 20px;
    }


    .Cards{
      display: flex;
      flex-direction:column ;
    }
  }


  

` 