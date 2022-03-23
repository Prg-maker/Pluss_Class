import styled from "styled-components";

import {BsThreeDotsVertical} from 'react-icons/bs'




export const Container = styled.div`
  width: 351px;
  height: 236px;
  background-color: var(--color-background-white);
  border-radius: 20px;
  

  display: flex;
  flex-direction: column;
  text-align: left;
  margin-top: 39px;

  animation-name:animationCard ;
  animation-duration: 1s;

  @keyframes animationCard{
    from{
      opacity: 0;
      transform: translateX(-30%);
    }
    to{
      opacity: 1;
      transform: translateX(0%);

    }
  }


  @media(max-width:780px){
    width: 300px;
    height: 180px;
    animation-name:animationCardMedia ;
    animation-duration: 1s;

    &:last-child{
      margin-bottom: 100px;
    }


  }

  @keyframes animationCardMedia{
    from{
      opacity: 0;
      transform: translateY(-30%);
    }
    to{
      opacity: 1;
      transform: translateY(0%);

    }
  }

`


export const Header = styled.div`
  display: flex;
  justify-content: space-between;

  background-color: black;
  color: white;
  border-radius: 10px 10px 0px 0px;


`
export const ContentWrapperHeader = styled.div`
  padding:   10px 0  10px 16px;
`
export const TitleClass = styled.div`

  font-weight: 500;
  font-size: 16px;
  line-height: 21px;

`
export const Description = styled.div`

  padding: 6.5px 0 ;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;

`
export const Turma = styled.div`
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  text-transform: uppercase;
`
export const IconTreePoints = styled(BsThreeDotsVertical)`
  width: 20px;
  height: 20px;
  cursor: pointer;
  margin:  6px 0 0 6px;
  color: var(--color-white);
  text-decoration: none;
`

export const  Content = styled.div``