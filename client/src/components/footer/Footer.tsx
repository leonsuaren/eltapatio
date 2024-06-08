import { type FC } from "react";

import {
  FooterWrapper,
  FooterContact,
  FooterSocial,
  CopyRight,
  FooterTitles,
  FooterHeater,
  ElTapatioHeader,
  FooterSocialIcons,
  MediaIconsButton,
  FaceBookIcon,
  InstagramIcon,
  TikTokIcon,
  WhatsappIcon
} from "./styled";

const Footer: FC = () => {
  return (
    <FooterWrapper>
      <FooterHeater>
        <ElTapatioHeader>
        </ElTapatioHeader>
      </FooterHeater>
      <FooterContact>
        <FooterTitles>Contacto</FooterTitles>
        <p></p>
      </FooterContact>
      <FooterSocial>
        <FooterSocialIcons>
          <MediaIconsButton>
            <FaceBookIcon />
          </MediaIconsButton>
          <MediaIconsButton>
            <InstagramIcon />
          </MediaIconsButton>
          <MediaIconsButton>
            <TikTokIcon />
          </MediaIconsButton>
          <MediaIconsButton>
            <WhatsappIcon />
          </MediaIconsButton>
        </FooterSocialIcons>
      </FooterSocial>
      <CopyRight>
        <FooterTitles>Leon Suarez</FooterTitles>
      </CopyRight>
    </FooterWrapper>
  );
};

export default Footer;
