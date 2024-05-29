import { ReactNode, useContext } from 'react';
import { SidePanelContext } from '../../context/side-panel-context/SidePanelContext.tsx';
import NavigationLinks from "../navigation-links/NavigationLinks.tsx";
import {
  SidePanelWrapper,
  SidePanelHeader,
  Logo,
  SidePanelCloseButton,
  SidePanelCloseButtonIcon,
  SidePanelBody,
} from "./styled.ts";
import LanguageButton from '../language-button/LanguageButton.tsx';

const SidePanel = (): ReactNode => {
  const sidePanelContext = useContext(SidePanelContext);
 
  return (
    <SidePanelWrapper closeSidePanel={sidePanelContext.isSidePanelOpen}>
      <SidePanelHeader>
        <Logo src="./logoeltapatio.png" alt="El Tapatío" />
        <SidePanelCloseButton onClick={() => sidePanelContext.closeSidePanel()}>
          <SidePanelCloseButtonIcon />
        </SidePanelCloseButton>
      </SidePanelHeader>
      <SidePanelBody>
        <NavigationLinks mode='sidePannel'/>
        <LanguageButton mode='sidePannel'/>
      </SidePanelBody>
    </SidePanelWrapper>
  );
}

export default SidePanel;
