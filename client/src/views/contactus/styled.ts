import styled from "styled-components";
import { ImFacebook2 } from "react-icons/im";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";
import { ImWhatsapp } from "react-icons/im";

//MAIN LAYOUT
export const ContactLayout = styled.main`
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: fit-content(40px) fit-content(550px) fit-content(100px);
    grid-column-gap: 0px;
    grid-row-gap: 20px;
    padding: 0 10px 0 10px;
    margin: 0 0 30px 0;
  }
`;
//MAIN LAYOUT

//BOOK BUTTON
export const BookFoodTruckButton = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  height: 100px;
  @media (min-width: 768px) {
    grid-area: 1 / 1 / 2 / 3;
    display: flex;
    justify-content: flex-start;
    height: 100px;
  }
`;
//BOOK BUTTON

//CONTACT FORM
export const ContactUsFormAndImage = styled.div`
  grid-area: 2 / 1 / 3 / 3;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContactUsForm = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: ${props => props.theme.primaryBoxShadow};
  border-radius: 10px;
  width: 90%;
  height: 500px;
  background-color: #ffffff;
  @media (min-width: 768px) {
    width: 70%;
    height: 700px;
    display: grid;
    grid-template-columns: 30% 70%;
  }
`;

export const ContactUsImageSection = styled.div`
  display: none;
  @media (min-width: 768px) {
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
  @media (min-width: 768px) {
    border-radius: 10px;
    background-color: #23b2b2;
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
  box-shadow: ${props => props.theme.primaryBoxShadow};
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
  @media (min-width: 768px) {
    height: 100px;
  }
`;

export const FaceBookIcon = styled(ImFacebook2)`
  color: #3b5998;
  font-size: 1.5rem;
  @media (min-width: 768px) {
    font-size: 3rem;
  }
`;

export const InstagramIcon = styled(FaSquareInstagram)`
  color: #f09433;
  font-size: 1.5rem;
  @media (min-width: 768px) {
    font-size: 3rem;
  }
`;

export const TikTokIcon = styled(FaTiktok)`
  color: #000000;
  font-size: 1.5rem;
  @media (min-width: 768px) {
    font-size: 3rem;
  }
`;

export const WhatsappIcon = styled(ImWhatsapp)`
  color: #25d366;
  font-size: 1.5rem;
  @media (min-width: 768px) {
    font-size: 3rem;
  }
`;
//MEDIA ICONS
