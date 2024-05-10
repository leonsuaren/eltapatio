import styled from "styled-components";

export const ContactUsForm = styled.div`
  /* width: 100%; */
  @media (min-width: 668px) {
    display: flex;
    flex-direction: column;
    width: 60%;
  }
`;

export const ContactFormLabel = styled.label`
  font-size: 1rem;
  @media (min-width: 668px) {
    font-size: 1.2rem;
    width: 100%;
  }
`;

export const ContactFormInput = styled.input`
  border: none;
  border-radius: 10px;
  background-color: #cccccc;
  margin: 20px 0;
  @media (min-width: 668px) {
    height: 40px;
    width: 100%;
  }
`;

export const ContactFormTextArea = styled.textarea`
  border: none;
  border-radius: 10px;
  height: 100px;
  width: 100%;
  margin: 20px 0;
  background-color: #cccccc;
`;

export const ContactFormButtons = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const ContactFormSubmitButton = styled.button`
  padding: 10px;
  color: #ffffff;
  background-color: #efb83c;
  border: none;
  border-radius: 10px;
  width: 100px;
  cursor: pointer;
  box-shadow: 3px 3px 3px #000000;
`;

export const ContactFormCancelButton = styled.button`
  padding: 10px;
  color: #ffffff;
  background-color: #b51c1a;
  border: none;
  border-radius: 10px;
  width: 100px;
  cursor: pointer;
  box-shadow: 3px 3px 3px #000000;
`;

export const ButtonSpan = styled.span`
  color: #ffffff;
  font-size: 1.1rem;
`;
