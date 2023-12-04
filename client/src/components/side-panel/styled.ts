import styled from 'styled-components';

export const SidePanelWrapper = styled.div`
  width: 90%;
  height: 100%;
  background-color: rgba(245, 243, 243,0.5);
  position: absolute;
  top: 0;
  left: 0;
  box-shadow: 5px 5px 5px;
  border-radius: 10px;
  @media(min-width: 668px) {
    display: none;
  }
`;