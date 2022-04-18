import styled from 'styled-components';

export const Container = styled.div`
  width: 455px;
  height: 697px;
  background: white;
  border-radius: 10px;
  margin-top: 39px;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    background: white;        /* color of the tracking area */
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--color-background-avatar);    /* color of the scroll thumb */
    border-radius: 20px;       /* roundness of the scroll thumb */
    border: 3px solid white;  /* creates padding around scroll thumb */
  }

`;
