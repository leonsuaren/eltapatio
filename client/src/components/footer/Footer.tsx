import { type FC } from 'react';

import { FooterWrapper, FooterContact, FooterSocial, CopyRight, FooterTitles } from './styled';

const Footer: FC = () => {
  return (
    <FooterWrapper>
      <FooterContact>
        <FooterTitles>Contact</FooterTitles>
      </FooterContact>
      <FooterSocial>
        <FooterTitles>Social</FooterTitles>
      </FooterSocial>
      <CopyRight>
        <FooterTitles>Leon Suarez</FooterTitles>
      </CopyRight>
    </FooterWrapper>
  )
}

export default Footer;