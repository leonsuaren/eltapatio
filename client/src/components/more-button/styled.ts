import styled from 'styled-components';

export const MoreButtonStyled = styled.button`
  padding: 5px;
  background-color: ${props => props.theme.primaryRed};
  border: none;
  border-radius: 5px;
  width: 100%;
  height: 40px;
  cursor: pointer;
  box-shadow: ${props => props.theme.primaryBoxShadow};
  align-self: center;
  justify-self: flex-end;
  margin: 0;
`;