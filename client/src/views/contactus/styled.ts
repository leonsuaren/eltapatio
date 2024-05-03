import styled from "styled-components";
import { ImFacebook2 } from "react-icons/im";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";
import { ImWhatsapp } from "react-icons/im";

//MAIN LAYOUT
export const ContactLayout = styled.main`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: fit-content(40px) fit-content(550px) fit-content(100px);
  grid-column-gap: 0px;
  grid-row-gap: 20px;
  padding: 0 10px 0 10px;
  margin: 0 0 30px 0;
`;
//MAIN LAYOUT

//BOOK BUTTON
export const BookFoodTruckButton = styled.div`
  grid-area: 1 / 1 / 2 / 3;
  display: flex;
  justify-content: flex-start;
  @media (min-width: 668px) {
    grid-area: 1 / 1 / 2 / 3;
    display: flex;
    justify-content: flex-start;
  }
`;
//BOOK BUTTON

//CONTACT FORM
export const ContactUsFormAndImage = styled.div`
  grid-area: 2 / 1 / 3 / 3;
  @media (min-width: 668px) {
    display: flex;
    justify-content: center;
  }
`;

export const ContactUsForm = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 5px 5px 5px #cccccc;
  border-radius: 10px;
  width: 100%;
  height: 400px;
  background-color: #ffffff;
  @media (min-width: 668px) {
    width: 70%;
    height: 700px;
    display: grid;
    grid-template-columns: 30% 70%;
  }
`;

export const ContactUsImageSection = styled.div`
  display: none;
  @media (min-width: 668px) {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
  }
`;

export const ContactUsFormSection = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
  @media (min-width: 668px) {
    border-radius: 10px;
    background-color: #23B2B2;
    border-top-left-radius: 10%; 
    border-bottom-left-radius: 10%; 
  }
`;
//CONTACT FORM

//MEDIA ICONS
export const MediaIconsButton = styled.a`
  cursor: pointer;
  padding: 20px;
  border: none;
  border-radius: 10px;
  box-shadow: 5px 5px 5px #cccccc;
  background-color: #ffffff;
`;

export const MediaIcons = styled.div`
  grid-area: 3 / 1 / 4 / 3;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  width: 100%;
  height: 50px;
  @media (min-width: 668px) {
    height: 100px;
  }
`;

export const FaceBookIcon = styled(ImFacebook2)`
  color: #3b5998;
  font-size: 1.5rem;
  @media (min-width: 668px) {
    font-size: 3rem;
  }
`;

export const InstagramIcon = styled(FaSquareInstagram)`
  color: #f09433;
  font-size: 1.5rem;
  @media (min-width: 668px) {
    font-size: 3rem;
  }
`;

export const TikTokIcon = styled(FaTiktok)`
  color: #000000;
  font-size: 1.5rem;
  @media (min-width: 668px) {
    font-size: 3rem;
  }
`;

export const WhatsappIcon = styled(ImWhatsapp)`
  color: #25d366;
  font-size: 1.5rem;
  @media (min-width: 668px) {
    font-size: 3rem;
  }
`;
//MEDIA ICONS
