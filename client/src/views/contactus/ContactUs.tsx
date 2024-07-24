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
  return (
    <>
      <SectionHeader translation="viewsHeaders.contact" />
      <ContactLayout>
        <BookFoodTruckButton>
          <BookButton />
        </BookFoodTruckButton>
        <EnvelopeIcon />
        <p>Puedes contactarnos atravez de nuestras redes sociales!</p>
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
          Si quieres trabajar con nosotros{" "}
          <a href="/">
            <ClickHereLink>haz click aqui!</ClickHereLink>
          </a>
        </TextContainer>
        <TextContainer>
          Para eventos and business{" "}
          <a href="/">
            <ClickHereLink>haz click aqui!</ClickHereLink>
          </a>
        </TextContainer>
        <Divisor />
        <LocationWrapper>
          <AddressContainer>
            <TextContainer>Estamos ubicados en:</TextContainer>
            <TextContainer>23420 Loveland St, Cincinnati OH</TextContainer>
          </AddressContainer>
          <LocationMap src="./TapatioUbicacion.png"/>
        </LocationWrapper>
      </ContactLayout>
    </>
  );
};

export default ContactUs;
