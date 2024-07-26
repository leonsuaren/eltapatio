import { type FC } from "react";

import {
  ModalBackground,
  ModalWrapper,
  ModalStyled,
  ModalImage,
  ModalItemDescription,
  ModalCloseButtonWrapper,
  ModalCloseButton,
} from "./styled.ts";

const Modal: FC = () => {
  return (
    <>
      <ModalBackground />
      <ModalWrapper>
        <ModalStyled>
          <ModalImage />
          <ModalItemDescription>description</ModalItemDescription>
          <ModalCloseButtonWrapper>
            <ModalCloseButton><span>Close</span></ModalCloseButton>
          </ModalCloseButtonWrapper>
        </ModalStyled>
      </ModalWrapper>
    </>
  );
};

export default Modal;
