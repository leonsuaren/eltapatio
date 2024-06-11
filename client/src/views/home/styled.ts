import styled from "styled-components";

export const HomeLayout = styled.main`
  display: flex;
  flex-direction: column;
  padding: 0 10px;
  @media (min-width: 668px) {
    padding: 0 20px;
  }
`;

export const HomeBanner = styled.div`
  position: relative;
  margin: 0 0 30px 0;
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
  @media (min-width: 668px) {
    width: 100%;
    height: 560px;
    display: grid;
    grid-template-columns: 30% 70%;
    position: absolute;
    top: 0;
  }
`;

export const BannerContentSlogan = styled.div`
  @media (min-width: 668px) {
    display: grid;
    grid-template-rows: 20% 60% 20%;
  }
`;

export const ContactUsButtonWrapper = styled.div`
  @media (max-width: 667px) {
    width: 100%;
    height: 150px;
    display: flex;
    position: absolute;
    top: 0;
  }
  @media (min-width: 668px) {
    display: flex;
    height: auto;
    justify-content: flex-end;
    align-items: center;
  }
`;

export const OrderNowButtonWrapper = styled.div`
  display: flex;
  @media (max-width: 667px) {
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
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
  box-shadow: 3px 3px 3px #7c7b7b;
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
  background-color: #B51C1A;
  border: none;
  border-radius: 10px;
  width: 90%;
  height: 50px;
  cursor: pointer;
  box-shadow: 3px 3px 3px #7c7b7b;
  align-self: center;
  justify-self: flex-end;
  @media (min-width: 668px) {
    width: 200px;
  }
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
  font-size: 1.3rem;
  @media (min-width: 668px) {
    font-size: 2.5rem;
    margin: 0;
  }
`;

export const SloganVacio = styled.h1`
  font-size: 2.5rem;
  color: #b51c1a;
  margin: 0;
  font-family: caveat;
  @media (min-width: 668px) {
    font-size: 3.5rem;
    margin: 0;
  }
`;
//BANNER CONTENT

//BANNER CARDS
export const BannerCards = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 20px;
  @media (min-width: 668px) {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
  }
`;

export const CardOne = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 667px) {
    grid-area: 1 / 1 / 2 / 2;
  }
  @media (min-width: 668px) {
    grid-area: 1 / 1 / 2 / 3;
  }
`;

export const CardTwo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 667px) {
    grid-area: 1 / 2 / 2 / 2;
  }
  @media (min-width: 668px) {
    grid-area: 1 / 3 / 2 / 5;
  }
`;

export const CardThree = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 667px) {
    grid-area: 2 / 1 / 3 / 2;
  }
  @media (min-width: 668px) {
    grid-area: 1 / 5 / 2 / 7;
  }
`;

export const CardFour = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 667px) {
    grid-area: 2 / 2 / 3 / 3;
  }
  @media (min-width: 668px) {
    grid-area: 2 / 1 / 3 / 4;
  }
`;

export const CardFive = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 667px) {
    grid-area: 3 / 1 / 4 / 3;
  }
  @media (min-width: 668px) {
    grid-area: 2 / 4 / 3 / 7;
  }
`;

//BANNER CARDS