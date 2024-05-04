import { type FC } from 'react';

import { ContactUsForm, ContactFormLabel, ContactFormInput, ContactFormTextArea, ContactFormButtons, ContactFormSubmitButton, ContactFormCancelButton, ButtonSpan } from './styled.ts';

const ContactForm: FC = () => {
  return (
    <ContactUsForm>
      <h1>Contact Us</h1>
      <ContactFormLabel>Name: 
        <ContactFormInput />
      </ContactFormLabel>
      <ContactFormLabel>E-mail: 
        <ContactFormInput />
      </ContactFormLabel>
      <ContactFormLabel>Phone Number: 
        <ContactFormInput />
      </ContactFormLabel>
      <ContactFormLabel>Message: 
        <ContactFormTextArea />
      </ContactFormLabel>
      <ContactFormButtons>
        <ContactFormSubmitButton><ButtonSpan>Submit</ButtonSpan></ContactFormSubmitButton>
        <ContactFormCancelButton><ButtonSpan>Cancel</ButtonSpan></ContactFormCancelButton>
      </ContactFormButtons>
    </ContactUsForm>
  )
}

export default ContactForm;