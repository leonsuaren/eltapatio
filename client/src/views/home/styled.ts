import styled from 'styled-components';

export const HomeLayout = styled.main`
  display: flex;
  flex-direction: row;
`;

export const HomeBanner = styled.div`
  position: relative;
`;

export const FoodTruckImage = styled.img`
  width: 100%;
  height: 560px;
  opacity: .2;
`;

//BANNER CONTENT
export const BannerContent = styled.div`
  position: absolute;
  top: 0px;
  width: 100%;
  height: 560px;
  display: grid;
  grid-template-columns: 30% 70%;
`;

export const BannerContentSlogan = styled.div`
  display: grid;
  grid-template-rows: 20% 60% 20%;
`;

export const ContactUsButton = styled.button`
    padding: 10px;
    color: #FFFFFF;
    background-color: #EFB83C;
    border: none;
    border-radius: 10px;
    width: 200px;
    height: 50px;
    cursor: pointer;
    box-shadow: 3px 3px 3px #000000;
    align-self: center;
    justify-self: flex-end;
`;

export const OrderNowButton = styled.button`
    padding: 10px;
    color: #FFFFFF;
    background-color: #23B2B2;
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
    align-items: flex-end;
    justify-content: center;
`;

export const SloganFirstPart = styled.h1`
  font-size: 3.5rem;
  margin: 0;
`;

export const SloganVacio = styled.h1`
  font-size: 3.6rem;
  color: #B51C1A;
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