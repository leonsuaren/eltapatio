import styled from "styled-components";
import { ImFacebook2 } from "react-icons/im";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";
import { ImWhatsapp } from "react-icons/im";

export const FooterWrapper = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.blackBackground};
  position: relative;
  left: 0;
  bottom: 0;
  width: 100%;
  z-index: -1;
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    align-items: center;
    justify-items: center;
    z-index: 2;
  }
`;

export const ElTapatioHeader = styled.h1`
  font-family: Caveat;
  color: #a6aeb8;
  font-size: 5rem;
  font-weight: bold;
`;

export const FooterTitles = styled.h4`
  color: #a6aeb8;
`;

export const FooterHeater = styled.div`
  grid-area: 1 / 1 / 2 / 4;
  color: #a6aeb8;
  display: flex;
  border-bottom: 1px solid #a6aeb8;
  width: 50%;
  justify-content: center;
  height: 150px;
`;

export const FooterContact = styled.div`
  grid-area: 2 / 1 / 3 / 2;
  height: 300px;
`;

//Social
export const FooterSocial = styled.div`
  grid-area: 2 / 2 / 3 / 3;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
`;

export const FooterSocialIcons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-end;
  width: 100%;
`;

export const MediaIconsButton = styled.a`
  cursor: pointer;
  border: none;
  width: 60px;
  height: 150px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  background-color: #ffffff;
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
//Social

export const CopyRight = styled.div`
  grid-area: 2 / 3 / 3 / 4;
`;
