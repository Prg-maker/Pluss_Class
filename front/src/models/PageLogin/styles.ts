import styled from 'styled-components'
import { BsGoogle } from 'react-icons/bs'

export const Container = styled.div`
  height: 100vh;
  display:flex;
  align-items:center;

  .person{
    height: 100vh;
    flex: .55;
  }

  .left{
    display: flex;
    flex-direction:column;
    flex: .45 ;
    width: 100%;
    align-items:center;


    img{
      padding-bottom: 80px;
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

  margin-bottom: 50px;
`
export const IconGoogle = styled(BsGoogle)`

`
