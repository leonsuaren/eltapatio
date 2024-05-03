import styled from 'styled-components';

export const ContactUsForm = styled.div`
    @media(min-width: 668px) {
      display: flex;
      flex-direction: column;
      width: 60%;
    }
`;

export const ContactFormLabel = styled.label`
  font-size: 1.2rem;
  width: 100%;
`;

export const ContactFormInput = styled.input`
  border: none;
  border-radius: 10px;
  height: 30px;
  width: 100%;
  margin: 20px 0;
  background-color: #e6e6e6;
`;

export const ContactFormTextArea = styled.textarea`
  border: none;
  border-radius: 10px;
  height: 100px;
  width: 100%;
  margin: 20px 0;
  background-color: #e6e6e6;
`;