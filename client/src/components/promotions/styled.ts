import styled from "styled-components";

export const PromotionsWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #fcf9f2;
  padding-bottom: 50px;
  margin-top: 20px;
`;

export const PromotionsTitle = styled.h1`
  font-weight: 500;
  margin: 20px 0 0 20px;
  @media (min-width: 668px) {
    margin: 20px 0 0 50px;
    align-self: flex-start;
  }
`;

export const Divisor = styled.div`
  width: 95%;
  height: 5px;
  background-color: #23b2b2;
  align-self: center;
  border-radius: 10px;
  margin: 0 0 50px 0;
  @media (min-width: 668px) {
    width: 30%;
    align-self: flex-start;
    margin: 0 0 50px 50px;
  }
`;

//PROMOTIONS SECTIONS
export const PromotionsSection = styled.section`
  position: relative;
  display: flex;
  width: 100%;
  height: 300px;
  @media (min-width: 668px) {
    width: 50%;
    position: static;
  }
`;

export const PromotionsImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0.3;
  width: 100%;
  height: 100%;
  @media (min-width: 668px) {
    position: static;
    width: 300px;
    opacity: 1;
  }
`;

//PROMOTION
export const Promotion = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  @media (min-width: 668px) {
    position: static;
  }
`;

export const PromotionTitle = styled.h2`
  font-weight: 500;
  color: #b51c1a;
  @media (min-width: 668px) {
    margin: 20px 0 0 50px;
  }
`;

export const PromotionDescription = styled.h3`
  font-weight: 400;
`;

export const PromotionsDetailsShowButton = styled.button`
  padding: 5px;
  background-color: #b51c1a;
  border: none;
  border-radius: 5px;
  width: 80px;
  color: #ffffff;
  height: 30px;
  cursor: pointer;
  box-shadow: 3px 3px 3px #7c7b7b;
  margin: 0;
`;
//PROMOTION
//PROMOTIONS SECTIONS
