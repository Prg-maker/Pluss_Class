import styled from 'styled-components';

import {MdKeyboardArrowDown} from 'react-icons/md'

export const Container = styled.div`
  width: 560px;
  height: 76px;
  background: white;

  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;
  >div{
    display: flex;
    align-items: center;
  }

  & + & {
    margin-top: 25px;
  }
`;


export const Imgteste = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1px solid var(--color-yellow);

  margin: 0 15px 0 13px;

`
export const Title = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
`
export const IconArrow = styled(MdKeyboardArrowDown)`
  width: 30px;
  height: 30px;
  cursor: pointer;
  margin-right: 10px;
`

export const Avatar = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1px solid var(--color-yellow);
  background: var(--color-background-avatar);
  margin: 0 15px 0 13px;
`