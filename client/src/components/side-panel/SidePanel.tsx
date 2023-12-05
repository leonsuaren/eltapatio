import { SidePanelWrapper, SidePanelHeader, Logo, SidePanelCloseButton, SidePanelCloseButtonIcon } from "./styled.ts";

export default function SidePanel() {
  return (
    <SidePanelWrapper>
      <SidePanelHeader>
        <Logo src="./logoeltapatio.png" alt="El Tapatío" />
        <SidePanelCloseButton><SidePanelCloseButtonIcon /></SidePanelCloseButton>
      </SidePanelHeader>
    </SidePanelWrapper>
  );
}
