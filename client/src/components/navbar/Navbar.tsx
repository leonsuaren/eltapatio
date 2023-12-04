import { useLocation } from "react-router-dom";

import LanguageButton from "../language-button/LanguageButton.tsx";
import MenuButton from "../menu-button/MenuButton.tsx";
import {
  Navigation,
  Logo,
  NavigationLink,
  NavigationList,
  MenuButtonWrapper,
  LanguageButtonWraper,
} from "./styled.ts";

export const Navbar = () => {
  const { pathname } = useLocation();

  return (
    <Navigation>
      <MenuButtonWrapper>
        <MenuButton />
      </MenuButtonWrapper>
      <Logo src="./logoeltapatio.png" alt="El Tapatío" />
      <NavigationList>
        <NavigationLink to="/" isActive={pathname === "/"}>
          Home
        </NavigationLink>
        <NavigationLink to="menu" isActive={pathname === "menu"}>
          Menu
        </NavigationLink>
        <NavigationLink to="services" isActive={pathname === "services"}>
          Services
        </NavigationLink>
        <NavigationLink to="contactus" isActive={pathname === "contactus"}>
          Contact Us
        </NavigationLink>
        <NavigationLink to="aboutus" isActive={pathname === "aboutus"}>
          About Us
        </NavigationLink>
      </NavigationList>
      <LanguageButtonWraper>
        <LanguageButton />
      </LanguageButtonWraper>
    </Navigation>
  );
};