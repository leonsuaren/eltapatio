import BookButton from "../../components/book-button/BookButton";
import ContactForm from "../../components/contact-form/ContactForm.tsx";
import Envelope from "../../components/envelope/Envelope.tsx";

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
          <ContactUsImageSection>
            <Envelope />
          </ContactUsImageSection>
          <ContactUsFormSection>
            <ContactForm />
          </ContactUsFormSection>
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