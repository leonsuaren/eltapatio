import { type FC } from 'react';

import { ContactUsForm, ContactFormLabel, ContactFormInput, ContactFormTextArea } from './styled.ts';

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
      <div>
        <button>Submit</button>
        <button>Cancel</button>
      </div>
    </ContactUsForm>
  )
}

export default ContactForm;