import { type FC, useContext } from "react";
import { ModalContext } from "../../context/modal-context/ModalContext.tsx"; 

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
  const modalContext = useContext(ModalContext);
  console.log(modalContext);
  return (
    <>
      <ModalBackground $closeModal={modalContext.isModalOpen}/>
      <ModalWrapper $closeModal={modalContext.isModalOpen} >
        <ModalStyled $closeModal={modalContext.isModalOpen}>
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
            <ModalCloseButton onClick={() => modalContext.closeOpenModal()}><span>Close</span></ModalCloseButton>
          </ModalCloseButtonWrapper>
        </ModalStyled>
      </ModalWrapper>
    </>
  );
};

export default Modal;
