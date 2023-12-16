// import { useState } from 'react';

import { useSidePanelContext } from "../../context/side-panel-context/SidePanelContext.tsx";
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
  // const [closeSidePanel, setCloseSidePanel] = useState<boolean>(false);

  // const handleOnCloseSidePanel = () => {
  //   setCloseSidePanel((prevState) => {
  //     return !prevState
  //   });
  // }
  const sidePanelCtx = useSidePanelContext();

  return (
    <SidePanelWrapper closeSidePanel={sidePanelCtx.openCloseSidePanel}>
      <SidePanelHeader>
        <Logo src="./logoeltapatio.png" alt="El Tapatío" />
        <SidePanelCloseButton>
          <SidePanelCloseButtonIcon />
        </SidePanelCloseButton>
      </SidePanelHeader>
      <SidePanelBody>
        <NavigationLinks mode='sidePanel'/>
      </SidePanelBody>
    </SidePanelWrapper>
  );
}
