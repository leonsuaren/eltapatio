import styled from "styled-components";

export const LanguageButtonStyled = styled.button`
  display: none;
  @media (min-width: 768px) {
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
    font-size: 1.1rem;
    color: #515151;
    border: 1px solid ${props => props.theme.primaryYellow};
    &:hover {
      background-color: ${props => props.theme.primaryYellow};
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
  font-size: 1.1rem;
  color: #515151;
  background-color: ${props => props.theme.primaryYellow};
  border: none;
`;
