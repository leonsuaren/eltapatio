import styled from 'styled-components';
import { CiDeliveryTruck } from "react-icons/ci";

export const BookButtonStyled = styled.button`
  width: 100%;
  border-radius: 10px;
  border: none;
  background-color: #EFB83C;
  color: #FFFFFF;
  box-shadow: 3px 3px 3px #7c7b7b;
  padding: 10px;
  cursor: pointer;
  width: 200px;  
  display: grid;
  grid-template-columns: 80% 20%;
  align-items: center;
  padding: 5px;

  @media(min-width: 668px) {
  }
`;

export const BookButtonDeliver = styled.div`
  /* display: none; */
  display: flex;
  background-color: #F5F3F3;
  border-radius: 10px;
  /* padding: 1px; */
  width: 30px;
  @media(min-width: 668px) {
  }
`;

export const BookButtonDeliverIcon = styled(CiDeliveryTruck)`
  /* display: none; */
  display: flex;
  font-size: 2rem;
  color: #321C1B;
  @media(min-width: 668px) {
  }
`;

export const BookButtonDeliverImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  margin: 0;
`;

