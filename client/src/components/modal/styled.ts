import styled from "styled-components";

export const ModalBackground = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: ${(props) => props.theme.backgroundWhite};
  opacity: 0.8;
`;

export const ModalWrapper = styled.div`
  width: 100%;
  height: 100%;
  z-index: 1;
  position: fixed;
  top: 0;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalStyled = styled.div`
  width: 90%;
  height: 90%;
  background: ${(props) => props.theme.lightYellowBackground};
  box-shadow: ${(props) => props.theme.primaryBoxShadow};
  border-radius: 10px;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(9, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  @media (min-width: 667px) and (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(9, 1fr);
    grid-template-rows: repeat(6, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
  }
  @media (min-width: 768px) {
    width: 40%;
    height: 90%;
  }
`;

export const ModalImage = styled.img`
  grid-area: 1 / 1 / 4 / 7;
  width: 100%;
  height: 100%;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  @media (min-width: 667px) and (max-width: 768px) {
    grid-area: 1 / 1 / 7 / 4;
  }
`;

export const ModalItemDescription = styled.div`
  grid-area: 4 / 1 / 9 / 7;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (min-width: 667px) and (max-width: 768px) {
    grid-area: 1 / 4 / 6 / 10;
  }
`;

//CLOSEBUTTON

export const ModalCloseButtonWrapper = styled.div`
  grid-area: 9 / 1 / 10 / 7;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 667px) and (max-width: 768px) {
    grid-area: 6 / 4 / 7 / 10;
  }
`;

export const ModalCloseButton = styled.button`
  padding: 5px;
  background-color: ${(props) => props.theme.primaryRed};
  border: none;
  border-radius: 5px;
  width: 50%;
  height: 40px;
  cursor: pointer;
  box-shadow: ${(props) => props.theme.primaryBoxShadow};
  align-self: center;
  justify-self: flex-end;
  margin: 0;
`;

//CLOSEBUTTON
