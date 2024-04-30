import BookButton from "../../components/book-button/BookButton";

import { ContactLayout, 
         BookFoodTruckButton, 
         ContactUsFormAndImage, 
         ContactUsForm, 
         MediaIcons, 
         MediaIconsButton, 
         FaceBookIcon, 
         InstagramIcon, 
         TikTokIcon, 
         WhatsappIcon, 
         ContactUsImageSection, 
         ContactUsFormSection 
        } from './styled.ts';

const ContactUs = () => {
  return (
    <ContactLayout>
      <BookFoodTruckButton>
        <BookButton />
      </BookFoodTruckButton>
      <ContactUsFormAndImage>
        <ContactUsForm>
          <ContactUsImageSection></ContactUsImageSection>
          <ContactUsFormSection></ContactUsFormSection>
        </ContactUsForm>
      </ContactUsFormAndImage>
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
  )
}

export default ContactUs;