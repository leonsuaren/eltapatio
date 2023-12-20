import styled from 'styled-components';

export const LanguageButtonStyled = styled.button`
  width: 50px;
  height: 30px;
  background-color: #FFFFFF;
  border-radius: 5px;
  border: 1px solid #CCCCCC;
  grid-column: 3 / 4;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2px;
  box-shadow: inset 1px 2px 5px #777;
  background: #e5e5e5;
  cursor: pointer;
  /* &:hover {
    transform: scale(1.1)
  } */
  @media (min-width: 668px) {
    width: 100px;
    height: 30px;
  }
`;

export const LanButtonInsideSwitch = styled.div`
  width: 100%;
  height: 100%;
  background-color: #8880f7;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;