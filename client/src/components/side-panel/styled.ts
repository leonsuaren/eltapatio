import styled from 'styled-components';
import { TfiClose } from "react-icons/tfi";

export const SidePanelWrapper = styled.div`
  width: 90%;
  height: 100vh;
  background-color: rgba(245, 243, 243,0.9);
  position: absolute;
  top: 0;
  left: 0;
  box-shadow: 5px 5px 5px;
  border-radius: 10px;
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
