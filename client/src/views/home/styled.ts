import styled from "styled-components";

export const HomeLayout = styled.main`
  display: flex;
  flex-direction: column;
`;

export const HomeBanner = styled.div`
  position: relative;
  margin: 0 0 200px 0;
  z-index: 0;
`;

export const FoodTruckImage = styled.img`
  width: 100%;
  height: 150px;
  opacity: 0.2;
  z-index: 0;
  @media (min-width: 668px) {
    width: 100%;
    height: 560px;
    opacity: 0.2;
  }
`;

//BANNER CONTENT
export const BannerContent = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0px;
  @media (min-width: 668px) {
    width: 100%;
    height: 560px;
    display: grid;
    grid-template-columns: 30% 70%;
  }
`;

export const BannerContentSlogan = styled.div`
  @media (min-width: 668px) {
    display: grid;
    grid-template-rows: 20% 60% 20%;
  }
`;

export const ContactUsButtonWrapper = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  @media (min-width: 668px) {
    height: auto;
    justify-content: flex-end;
    align-items: center;
  }
`;

export const ContactUsButton = styled.button`
  color: #ffffff;
  background-color: #efb83c;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  box-shadow: 3px 3px 3px #000000;
  padding: 10px;
  width: 150px;
  height: 50px;
  align-self: center;
  margin: 0 0 0 20px;
  @media (min-width: 668px) {
    width: 200px;
    height: 50px;
    justify-self: flex-end;
  }
`;

export const OrderNowButton = styled.button`
  padding: 10px;
  color: #ffffff;
  background-color: #23b2b2;
  border: none;
  border-radius: 10px;
  width: 200px;
  height: 50px;
  cursor: pointer;
  box-shadow: 3px 3px 3px #000000;
  align-self: center;
  justify-self: flex-end;
`;

export const SloganText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  @media (min-width: 668px) {
    align-items: flex-end;
    justify-content: center;
  }
`;

export const SloganFirstPart = styled.h1`
font-size: 2rem;
  @media (min-width: 668px) {
    font-size: 3.5rem;
    margin: 0;
  }
`;

export const SloganVacio = styled.h1`
  font-size: 3.6rem;
  color: #b51c1a;
  margin: 0;
`;
//BANNER CONTENT

//BANNER CARDS
export const BannerCards = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
`;

export const CardOne = styled.div`
  grid-area: 1 / 1 / 2 / 3;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CardTwo = styled.div`
  grid-area: 1 / 3 / 2 / 5;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CardThree = styled.div`
  grid-area: 1 / 5 / 2 / 7;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CardFour = styled.div`
  grid-area: 2 / 1 / 3 / 4;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CardFive = styled.div`
  grid-area: 2 / 4 / 3 / 7;
  display: flex;
  align-items: center;
  justify-content: center;
`;

//BANNER CARDS
