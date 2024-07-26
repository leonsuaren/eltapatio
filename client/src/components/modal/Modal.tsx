import { type FC } from "react";

import { ModalBackground, ModalWrapper, ModalStyled, ModalImage, ModalItemDescription, ModalCloseButton } from "./styled.ts";

const Modal: FC = () => {
  return (
    <>
      <ModalBackground />
      <ModalWrapper>
        <ModalStyled>
          <ModalImage />
          <ModalItemDescription>
            description
          </ModalItemDescription>
          <ModalCloseButton>
            <button>close</button>
          </ModalCloseButton>
        </ModalStyled>
      </ModalWrapper>
    </>
  );
};

export default Modal;
