import { type FC } from "react";

import { ModalBackground, ModalWrapper, ModalStyled } from "./styled.ts";

const Modal: FC = () => {
  return (
    <>
      <ModalBackground />
      <ModalWrapper>
        <ModalStyled></ModalStyled>
      </ModalWrapper>
    </>
  );
};

export default Modal;
