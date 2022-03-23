import styled from "styled-components";



export const Container = styled.div`
  width: 560px;
  height: 184px;
  background-color: var(--color-black);
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  text-align: left;
  margin-top: 39px;
  color: white;
  padding-left: 15px;
  transition: filter  .2s;
  animation-name: animationCard;
  animation-duration: 0.5s;
  margin-bottom: 73px;
  &:hover{
    filter:brightness(0.9) ;    
  }


  @keyframes animationCard {
    from{
      opacity: 0;
    }
    to{
      opacity: 1;
    }
  }


`



export const TitleClass = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 36px;
  line-height: 54px;
  padding-top: 5px;

`
export const Description = styled.div`

  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  padding: 5px 0;

`
export const Turma = styled.div`
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  text-transform: uppercase;
`
