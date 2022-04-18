import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 80px;
  padding: 0 25px;


 
  >div{
    



    &:first-child{
      padding-top: 14px ;
    }

    &:not(:first-child){
      padding-top:29px ;
    }
  }

  .profile{
    display: flex;
    align-items: center;
  }
`;

export const Avatar = styled.img`
  width: 35px;
  height: 35px;
  background: #C4C4C4;
  border-radius: 50%;
  margin-right: 97px;
`
export const Name = styled.div`

  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;

`

export const Separete = styled.div`

  border-bottom: 1px solid #C4C4C4;
  padding-top: 15px;



  


`