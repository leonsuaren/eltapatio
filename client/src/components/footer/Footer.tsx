import { type FC } from "react";

import { useTranslation } from "react-i18next"; 

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
  const { t } = useTranslation();

  return (
    <FooterWrapper>
      <FooterHeater>
        <ElTapatioHeader>
        </ElTapatioHeader>
      </FooterHeater>
      <FooterContact>
        <FooterTitles>{t('navigation.contactus')}</FooterTitles>
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
        <FooterTitles>-------</FooterTitles>
      </CopyRight>
    </FooterWrapper>
  );
};

export default Footer;
