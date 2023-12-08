import LanguageButton from "../language-button/LanguageButton.tsx";
import NavigationLinks from "../navigation-links/NavigationLinks.tsx";
import MenuButton from "../menu-button/MenuButton.tsx";
import {
  Navigation,
  Logo,
  MenuButtonWrapper,
  LanguageButtonWraper,
  NavbarNavigationList,
} from "./styled.ts";

type NavbarProps = {
  onCloseSidePanel: () => void
}

export const Navbar = ({onCloseSidePanel}: NavbarProps) => {

  return (
    <Navigation>
      <MenuButtonWrapper>
        <MenuButton onCloseSidePanel={onCloseSidePanel}/>
      </MenuButtonWrapper>
      <Logo src="./logoeltapatio.png" alt="El Tapatío" />
      <NavbarNavigationList>
        <NavigationLinks onCloseSidePanel={onCloseSidePanel} />
      </NavbarNavigationList>
      <LanguageButtonWraper>
        <LanguageButton />
      </LanguageButtonWraper>
    </Navigation>
  );
};
