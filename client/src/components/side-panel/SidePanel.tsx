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
  return (
    <SidePanelWrapper>
      <SidePanelHeader>
        <Logo src="./logoeltapatio.png" alt="El Tapatío" />
        <SidePanelCloseButton>
          <SidePanelCloseButtonIcon />
        </SidePanelCloseButton>
      </SidePanelHeader>
      <SidePanelBody>
        <NavigationLinks />
      </SidePanelBody>
    </SidePanelWrapper>
  );
}
