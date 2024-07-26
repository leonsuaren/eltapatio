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
  box-shadow: ${props => props.theme.primaryBoxShadow};
  border-radius: 10px;
`;
