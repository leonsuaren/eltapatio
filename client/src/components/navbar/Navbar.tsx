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

export const Navbar = () => {

  return (
    <Navigation>
      <MenuButtonWrapper>
        <MenuButton/>
      </MenuButtonWrapper>
      <Logo src="./logoeltapatio.png" alt="El Tapatío" />
      <NavbarNavigationList>
        <NavigationLinks mode='navbar'/>
      </NavbarNavigationList>
      <LanguageButtonWraper>
        <LanguageButton />
      </LanguageButtonWraper>
    </Navigation>
  );
};
