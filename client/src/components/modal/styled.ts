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
  grid-area: 1 / 1 / 6 / 7;
  width: 100%;
  height: 100%;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  @media (min-width: 667px) and (max-width: 768px) {
    grid-area: 1 / 1 / 7 / 5;
  }
  @media (min-width: 768px) {
    grid-area: 1 / 1 / 7 / 7
  }
`;

//DESCRIPTION

export const ModalItemDescription = styled.div`
  grid-area: 6 / 1 / 9 / 7;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  @media (min-width: 667px) and (max-width: 768px) {
    grid-area: 1 / 5 / 6 / 10;
  }
  @media (min-width: 768px) {
    grid-area: 7 / 1 / 9 / 7;
  }
`;

export const ElTapatioSlogan = styled.div`
  grid-area: 1 / 1 / 2 / 7;
  display: flex;
  justify-content: flex-end;
  padding: 0 10px;
`;

export const SloganText = styled.p`
  color: #aeafb2;
  font-size: .7rem;
`;

export const ItemTitle = styled.h3`
  grid-area: 2 / 1 / 3 / 5;
  padding: 0 10px;
`;

export const ItemPrice = styled.h3`
  grid-area: 2 / 5 / 3 / 7;
  margin: auto;
`;

export const ItemDescription = styled.p`
  grid-area: 3 / 1 / 5 / 7;
  padding: 0 10px;
  text-align: justify;
`;

//DESCRIPTION
//CLOSEBUTTON

export const ModalCloseButtonWrapper = styled.div`
  grid-area: 9 / 1 / 10 / 7;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 667px) and (max-width: 768px) {
    grid-area: 6 / 5 / 7 / 10;
  }
`;

export const ModalCloseButton = styled.button`
  padding: 5px;
  background-color: ${(props) => props.theme.primaryRed};
  border: none;
  border-radius: 5px;
  width: 30%;
  height: 40px;
  cursor: pointer;
  box-shadow: ${(props) => props.theme.primaryBoxShadow};
  align-self: center;
  justify-self: flex-end;
  margin: 0;
`;

//CLOSEBUTTON
