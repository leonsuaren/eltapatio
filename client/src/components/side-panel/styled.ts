import styled, { keyframes } from "styled-components";
import { TfiClose } from "react-icons/tfi";

type SidePanelProps = {
  $closeSidePanel?: boolean;
};

const sidePanelEasyOut = keyframes`
    from{
    left: -350px;
  }
  to{
    left: 0px;
  }
`;

export const SidePanelBackground = styled.div<SidePanelProps>`
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme.backgroundWhite};
  opacity: 0.8;
  position: fixed;
  top: 0;
  z-index: 1;
  display: ${(props) => (props.$closeSidePanel ? "flex" : "none")};
  @media (min-width: 768px) {
    display: none;
  }
`;

export const SidePanelWrapper = styled.div<SidePanelProps>`
  width: 90%;
  height: 100vh;
  background-color: ${props => props.theme.backgroundWhite};;
  position: fixed;
  top: 0;
  box-shadow: ${props => props.theme.primaryBoxShadow};
  border-radius: 10px;
  display: ${(props) => (props.$closeSidePanel ? "flex" : "none")};
  flex-direction: column;
  animation: ${sidePanelEasyOut} 0.4s cubic-bezier(0.47, 1.64, 0.41, 0.8);
  z-index: 2;
  @media (min-width: 768px) {
    display: none;
  }
`;

export const SidePanelHeader = styled.div`
  width: auto;
  height: 90px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`;

export const Logo = styled.img`
  width: 100px;
  height: 50px;
`;

export const SidePanelCloseButton = styled.button`
  background-color: transparent;
  border: none;
`;

export const SidePanelCloseButtonIcon = styled(TfiClose)`
  font-size: 1.3rem;
`;

export const SidePanelBody = styled.div`
  width: auto;
  height: 80%;
  display: flex;
  flex-direction: column;
`;
