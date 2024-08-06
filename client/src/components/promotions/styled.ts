import styled from "styled-components";

export const PromotionsWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: ${props => props.theme.lightYellowBackground};
  padding-bottom: 50px;
  margin: 20px 0;
`;

//PROMOTIONS SECTIONS
export const PromotionsSection = styled.section`
  position: relative;
  display: flex;
  width: 100%;
  height: 300px;
  @media (min-width: 768px) {
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
  @media (min-width: 768px) {
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
  @media (min-width: 768px) {
    position: static;
  }
`;

export const PromotionTitle = styled.h2`
  font-weight: 500;
  color: #b51c1a;
  @media (min-width: 768px) {
    margin: 20px 0 0 50px;
  }
`;

export const PromotionDescription = styled.h3`
  font-weight: 400;
`;

export const PromotionsDetailsShowButton = styled.div`
  width: 60%;
`;
//PROMOTION
//PROMOTIONS SECTIONS
