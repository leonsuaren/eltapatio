import styled, { keyframes } from 'styled-components';
import { TfiClose } from "react-icons/tfi";

type SidePanelProps = {
  closeSidePanel?: boolean
}

const sidePanelEasyOut = keyframes`
    from{
    left: -350px;
  }
  to{
    left: 0px;
  }
`;

export const SidePanelWrapper = styled.div<SidePanelProps>`
  width: 90%;
  height: 100vh;
  background-color: rgba(245, 243, 243,0.9);
  position: absolute;
  top: 0;
  box-shadow: 5px 5px 5px;
  border-radius: 10px;
  display: ${(props => props.closeSidePanel ? '' : 'none')};
  animation: ${sidePanelEasyOut} .4s cubic-bezier(.47,1.64,.41,.8);
  z-index: 2;
  @media(min-width: 668px) {
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
