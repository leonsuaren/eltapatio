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
  height: 500px;
  opacity: .2;
`;

export const BannerContent = styled.div`
  position: absolute;
  top: 0px;
  width: 100%;
  height: 500px;
  display: grid;
  grid-template-columns: 40% 60%;
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