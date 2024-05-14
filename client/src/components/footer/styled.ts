import styled from "styled-components";

export const FooterWrapper = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #000000;
  position: relative;
  left: 0;
  bottom: 0;
  width: 100%;
  padding: 50px 0px;
  z-index: -1;
  margin: 50px 0 0 0;
  @media (min-width: 668px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    justify-items: center;
    z-index: 2;
  }
`;

export const FooterTitles = styled.h4`
  color: #a6aeb8;
`;

export const FooterContact = styled.div``;

export const FooterSocial = styled.div``;

export const CopyRight = styled.div``;
