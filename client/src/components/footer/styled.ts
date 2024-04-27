import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #000000;
  position: absolute;
  width: 100%;
  padding: 50px 0px;
  bottom: 0;
  z-index: -1;
  @media(min-width: 668px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    justify-items: center;
    z-index: 2;
  }
`;

export const FooterTitles = styled.h4`
 color: #A6AEB8;
`;

export const FooterContact = styled.div`

`;

export const FooterSocial = styled.div`

`;

export const CopyRight = styled.div`

`;