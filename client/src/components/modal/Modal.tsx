import { type FC } from "react";

import {
  ModalBackground,
  ModalWrapper,
  ModalStyled,
  ModalImage,
  ModalItemDescription,
  ModalCloseButtonWrapper,
  ModalCloseButton,
  ElTapatioSlogan,
  SloganText,
  ItemTitle,
  ItemPrice,
  ItemDescription
} from "./styled.ts";

const Modal: FC = () => {
  return (
    <>
      <ModalBackground />
      <ModalWrapper>
        <ModalStyled>
          <ModalImage src="./biriatacos.jpeg"/>
          <ModalItemDescription>
            <ElTapatioSlogan>
              <SloganText>El Tapatio, Authentic Mexican Food</SloganText>
            </ElTapatioSlogan>
              <ItemTitle>Tacos de Biria</ItemTitle>
              <ItemPrice>$2.99</ItemPrice>
              <ItemDescription>Mollit veniam nulla nulla minim qui. Culpa cupidatat nostrud magna proident qui officia laboris elit. Culpa cupidatat nostrud</ItemDescription>
          </ModalItemDescription>
          <ModalCloseButtonWrapper>
            <ModalCloseButton><span>Close</span></ModalCloseButton>
          </ModalCloseButtonWrapper>
        </ModalStyled>
      </ModalWrapper>
    </>
  );
};

export default Modal;
