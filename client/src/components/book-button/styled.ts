import styled from 'styled-components';
import { CiDeliveryTruck } from "react-icons/ci";

export const BookButtonStyled = styled.button`
  width: 100%;
  border-radius: 10px;
  border: none;
  background-color: #EFB83C;
  color: white;
  box-shadow: 5px 5px 5px #CCCCCC;
  padding: 10px;
  cursor: pointer;
  @media(min-width: 668px) {
    width: 200px;  
    display: grid;
    grid-template-columns: 80% 20%;
    align-items: center;
    padding: 5px;
  }
`;

export const BookButtonDeliver = styled.div`
  display: none;
  @media(min-width: 668px) {
    display: flex;
    background-color: #F5F3F3;
    border-radius: 10px;
    padding: 1px;
  }
`;

export const BookButtonDeliverIcon = styled(CiDeliveryTruck)`
  display: none;
  @media(min-width: 668px) {
    display: flex;
    font-size: 2rem;
    color: #321C1B;
  }
`;
