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
    setCloseSidePanel(() => {
      return true
    });
  }
  console.log(closeSidePanel);

  return (
    <SidePanelWrapper closeSidePanel={closeSidePanel}>
      <SidePanelHeader>
        <Logo src="./logoeltapatio.png" alt="El Tapatío" />
        <SidePanelCloseButton onClick={handleOnCloseSidePanel}>
          <SidePanelCloseButtonIcon />
        </SidePanelCloseButton>
      </SidePanelHeader>
      <SidePanelBody>
        <NavigationLinks />
      </SidePanelBody>
    </SidePanelWrapper>
  );
}
