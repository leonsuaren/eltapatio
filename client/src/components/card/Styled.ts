import styled from 'styled-components';

export const CardStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 140px;
  height: 248px;
  background-color: #FFFFFF;
  border-radius: 5px;
  box-shadow: 3px 3px 3px #7c7b7b;
  padding: 10px;
`;

export const CardImage = styled.img`
  width: 100%;
  height: 119px;
  border-radius: 5px;
`;

export const CardTitle = styled.h4`
  margin: 0px;
`;

export const CardDescription = styled.p`
  font-size: .9rem;
`;

export const CardButton = styled.button`
  padding: 5px;
  background-color: #B51C1A;
  border: none;
  border-radius: 5px;
  width: 100%;
  height: 40px;
  cursor: pointer;
  box-shadow: 3px 3px 3px #7c7b7b;
  align-self: center;
  justify-self: flex-end;
  margin: 0;
`;