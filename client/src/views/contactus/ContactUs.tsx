import { useTranslation } from "react-i18next";

import BookButton from "../../components/book-button/BookButton";
import SectionHeader from "../../components/section-header/SectionHeader.tsx";

import {
  ContactLayout,
  BookFoodTruckButton,
  MediaIcons,
  MediaIconsButton,
  FaceBookIcon,
  InstagramIcon,
  TikTokIcon,
  WhatsappIcon,
  EnvelopeIcon,
  ClickHereLink,
  Divisor,
  LocationWrapper,
  AddressContainer,
  LocationMap,
  TextContainer
} from "./styled.ts";

const ContactUs = () => {
  const { t } = useTranslation();

  return (
    <>
      <SectionHeader translation="viewsHeaders.contact" />
      <ContactLayout>
        <BookFoodTruckButton>
          <BookButton />
        </BookFoodTruckButton>
        <EnvelopeIcon />
        <p>{t('contactInfo.socialMediaInfo')}</p>
        <MediaIcons>
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
        </MediaIcons>
        <TextContainer>
          {t('contactInfo.workWithUsInfo')}{" "}
          <a href="/">
            <ClickHereLink>{t('contactInfo.clickHere')}</ClickHereLink>
          </a>
        </TextContainer>
        <TextContainer>
          {t('contactInfo.eventAndBusinessInfo')}{" "}
          <a href="/">
            <ClickHereLink>{t('contactInfo.clickHere')}</ClickHereLink>
          </a>
        </TextContainer>
        <Divisor />
        <LocationWrapper>
          <AddressContainer>
            <TextContainer>{t('contactInfo.locationInfo')}</TextContainer>
            <TextContainer>23420 Loveland St, Cincinnati OH</TextContainer>
          </AddressContainer>
          <LocationMap src="./TapatioUbicacion.png"/>
        </LocationWrapper>
      </ContactLayout>
    </>
  );
};

export default ContactUs;
