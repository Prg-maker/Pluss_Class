import styled, { css, keyframes } from 'styled-components'
import { BsGoogle, BsGithub } from 'react-icons/bs'

export const Container = styled.div`
  height: 100vh;
  display:flex;
  align-items:center;
  overflow: hidden;
  .person{
    height: 100vh;
    flex: .55;
    animation-name: AnimationImgLeft;
    animation-duration: .70s;
    transition: 0.2s;

  }

  .left{
    display: flex;
    flex-direction:column;
    flex: .45 ;
    width: 100%;
    align-items:center;
    animation-name: AnimationForm;
    animation-duration: .70s;
    transition: 0.2s;


    img{
      padding-bottom: 80px;
    }


  }

  @keyframes AnimationImgLeft {
    from {
      transform: translateX(-50%);
      opacity: 0;
    }
    to {
      transform: translateX(0%);
      opacity: 1;

    }
  }

  @keyframes AnimationForm {
    from {
      transform: translateX(50%);
      opacity: 0;
    }
    to {
      transform: translateX(0%);
      opacity: 1;

    }
  }

`

export const Title = styled.h1`
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  padding-bottom: 67px;

`



export const Button = styled.button`

  display:flex;
  align-items:center;
  justify-content:center;

  width: 320px;
  height: 50px;

  background: var(--color-yellow);
  color:var(--color-text-white);
  cursor:pointer;
  border-radius: 8px;
  font-size:19px;

  margin-bottom: 50px;
  transition: 0.2s;

  &.github{
    background: var(--color-black);
  }


    &:hover, &:active  {
      filter:brightness(0.9);
    }


`

const StyleIcons = css`
  margin-right:15px;
  width: 20px;
  height: 20px;
`

export const IconGoogle = styled(BsGoogle)`
  ${StyleIcons}
`

export const IconGithub = styled(BsGithub)`
  ${StyleIcons}

`
