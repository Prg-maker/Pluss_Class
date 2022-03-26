import styled from "styled-components";


export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  background: var(--color-background-white);

  padding: 8px 94px 8px 101px;

  >div{
    display: flex;
    align-items: center;

    >img{
      width: 40px;
      height: 40px;
      border-radius: 50%;
      border: 1px solid var(--color-yellow);
    }


  }

  @media(max-width:780px){


    background: var(--color-background-white);
    width: 100%;
    padding: 0;


    >div{
      width: 100%;
      padding: 5px 20px;
      display: flex;
      justify-content: space-between;
      

      p{
        font-size: 14px;
        text-overflow: ellipsis;
      }
    }
  }

  a{
    text-decoration: none;
    &:hover{
      opacity: 0.8;
    }
  }

`
export const Logo = styled.img`
  width: 179px;
  height: 54px;

  @media(max-width:780px){
   display: none;
  }
`


  export const Pluss = styled.p`
  min-width: 116px;
  padding : 0 20px; 
  height: 30px;
  border: 2px solid black;
  border-radius: 7px;
  cursor:pointer;
  transition: opacity .2s;
  color: var(--color-black);
  text-align: center;


  @media(max-width:780px){
    display: none;
  }
`


export const Name = styled.p`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  overflow: hidden;
  white-space: nowrap;
  text-align: center;
  color: var(--color-black);
  padding: 0px 19px 0 19px;

`
export const Avatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid var(--color-yellow);    
  background: #c4c4c4;
`