import styled from 'styled-components';

export const CardStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 140px;
  height: 248px;
  background-color: #FFFFFF;
  border-radius: 5px;
  box-shadow: 5px 5px 5px;
  padding: 10px;
`;

export const CardImage = styled.img`
  width: 100%;
  height: 119px;
  border-radius: 5px;
`;

export const CardTitle = styled.h2`
  margin: 0px;
`;

export const CardDescription = styled.p`
  font-size: .9rem;
`;

export const CardButton = styled.button`
  padding: 10px;
  color: #FFFFFF;
  background-color: #EFB83C;
  border: none;
  border-radius: 10px;
  width: 120px;
  height: 50px;
  cursor: pointer;
  box-shadow: 3px 3px 3px #000000;
  align-self: center;
  justify-self: flex-end;
  margin: 0;
  padding: 0;
`;