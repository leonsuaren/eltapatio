import { useState } from 'react';

import NavigationLinks from "../navigation-links/NavigationLinks.tsx";
import {
  SidePanelWrapper,
  SidePanelHeader,
  Logo,
  SidePanelCloseButton,
  SidePanelCloseButtonIcon,
  SidePanelBody,
} from "./styled.ts";

export default function SidePanel() {
  const [closeSidePanel, setCloseSidePanel] = useState<boolean>(false);

  const handleOnCloseSidePanel = () => {
    setCloseSidePanel((prevState) => {
      return !prevState
    });
  }

  return (
    <SidePanelWrapper closeSidePanel={closeSidePanel}>
      <SidePanelHeader>
        <Logo src="./logoeltapatio.png" alt="El Tapatío" />
        <SidePanelCloseButton onClick={handleOnCloseSidePanel}>
          <SidePanelCloseButtonIcon />
        </SidePanelCloseButton>
      </SidePanelHeader>
      <SidePanelBody>
        <NavigationLinks mode='sidePanel' onCloseSidePanel={handleOnCloseSidePanel}/>
      </SidePanelBody>
    </SidePanelWrapper>
  );
}
