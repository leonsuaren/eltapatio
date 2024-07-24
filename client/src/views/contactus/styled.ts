import styled from "styled-components";
import { ImFacebook2 } from "react-icons/im";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";
import { ImWhatsapp } from "react-icons/im";
import { HiOutlineEnvelope } from "react-icons/hi2";

//MAIN LAYOUT
export const ContactLayout = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  padding: 0 20px;
  @media (min-width: 768px) {
    display: flex;
    padding: 0 10px 0 10px;
    margin: 0 0 30px 0;
  }
`;
//MAIN LAYOUT

//BOOK BUTTON
export const BookFoodTruckButton = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-start;
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

//ENVELOPE
export const EnvelopeIcon = styled(HiOutlineEnvelope)`
  font-size: 8rem;
  color: #23b2b2;
`;
//ENVELOPE

//MEDIA ICONS
export const MediaIconsButton = styled.a`
  cursor: pointer;
  padding: 20px;
  border: none;
  border-radius: 10px;
  box-shadow: ${(props) => props.theme.primaryBoxShadow};
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

//CLICK HERE
export const ClickHereLink = styled.span`
  font-weight: bold;
  color: ${(props) => props.theme.primaryFontColor};
`;
//CLICK HERE

//DIVISOR
export const Divisor = styled.div`
  width: 60%;
  border: 1px solid ${(props) => props.theme.primaryFontColor};
  margin: 50px 0;
`;
//DIVISOR

//LOCATION
export const LocationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 0 20px 0px;
  @media (min-width: 768px) {
    width: 60%;
    height: 400px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    align-items: center;
    justify-items: center;
  }
`;

export const AddressContainer = styled.div`
  width: 180px;
  height: 100px;
`;

export const LocationMap = styled.img`
  width: 80%;
`;

//LOCATION

export const TextContainer = styled.p`
  font-size: .9rem;
`;
