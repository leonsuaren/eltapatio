import styled from "styled-components";

export const Card = styled.button`
  width: 100px;
  height: 150px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.primaryRed};
  box-shadow: ${props => props.theme.primaryBoxShadow};
  border: none;
  cursor: pointer;
  @media (min-width: 768px) {
    width: 150px;
    height: 200px;
  }
`;

export const CardIcon = styled.div`
  display: flex;
  width: 100%;
  height: 50%;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
`;

export const CardImageHolder = styled.img`
  width: 80%;
  height: 80%;
  border-radius: 10px;
`;

export const CardTitle = styled.div`
  display: flex;
  width: 100%;
  height: 50%;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  color: #FFFFFF;
`;
