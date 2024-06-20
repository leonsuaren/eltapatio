import { ReactNode, useContext } from "react";
import { SidePanelContext } from "../../context/side-panel-context/SidePanelContext.tsx";
import NavigationLinks from "../navigation-links/NavigationLinks.tsx";
import {
  SidePanelBackground,
  SidePanelWrapper,
  SidePanelHeader,
  Logo,
  SidePanelCloseButton,
  SidePanelCloseButtonIcon,
  SidePanelBody,
} from "./styled.ts";
import LanguageButton from "../language-button/LanguageButton.tsx";

const SidePanel = (): ReactNode => {
  const sidePanelContext = useContext(SidePanelContext);

  return (
    <div>
      <SidePanelBackground $closeSidePanel={sidePanelContext.isSidePanelOpen} onClick={() => sidePanelContext.closeOpenSidePanel()}/>
      <SidePanelWrapper $closeSidePanel={sidePanelContext.isSidePanelOpen}>
        <SidePanelHeader>
          <Logo src="./logoeltapatio.png" alt="El Tapatío" />
          <SidePanelCloseButton
            onClick={() => sidePanelContext.closeOpenSidePanel()}
          >
            <SidePanelCloseButtonIcon />
          </SidePanelCloseButton>
        </SidePanelHeader>
        <SidePanelBody>
          <NavigationLinks mode="sidePannel" />
          <LanguageButton mode="sidePannel" />
        </SidePanelBody>
      </SidePanelWrapper>
    </div>
  );
};

export default SidePanel;
