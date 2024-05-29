import styled from "styled-components";

export const LanguageButtonStyled = styled.button`
  display: none;
  @media (min-width: 668px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 120px;
    height: 40px;
    border-radius: 5px;
    border: none;
    background-color: #fff;
    grid-column: 3 / 4;
    cursor: pointer;
    font-family: "helvetica";
    font-size: 1.1rem;
    color: #515151;
    border: 1px solid #fce2ab;
    &:hover {
      background-color: #fce2ab;
    }
  }
`;

export const LanguageButtonResponsiveStyled = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40px;
  cursor: pointer;
  font-family: "helvetica";
  font-size: 1.1rem;
  color: #515151;
  background-color: #fce2ab;
  border: none;
`;
