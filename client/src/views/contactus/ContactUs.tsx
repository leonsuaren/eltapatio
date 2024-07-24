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
} from "./styled.ts";

const ContactUs = () => {
  return (
    <>
      <SectionHeader translation="" />
      <ContactLayout>
        <BookFoodTruckButton>
          <BookButton />
        </BookFoodTruckButton>
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
      </ContactLayout>
    </>
  );
};

export default ContactUs;
