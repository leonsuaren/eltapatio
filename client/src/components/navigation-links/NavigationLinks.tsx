import { useLocation } from "react-router-dom";

import {
  NavigationList,
  NavigationLink,
  NavigationLikWrapper,
} from "./styled.ts";

type SidePanelProps = {
  mode: "sidePanel",
  // onCloseSidePanel: () => void;
}

type NavbarProps = {
  mode: "navbar"
}

type NavigationLinksProps = SidePanelProps | NavbarProps;

export default function NavigationLinks(
  props
: NavigationLinksProps) {

  const { pathname } = useLocation();
  const {mode} = props;

  if (mode === "navbar") {
    return (
      <NavigationList>
        <NavigationLikWrapper>
          <NavigationLink to="/" isActive={pathname === "/"}>
            Home
          </NavigationLink>
        </NavigationLikWrapper>
        <NavigationLikWrapper>
          <NavigationLink to="menu" isActive={pathname === "menu"}>
            Menu
          </NavigationLink>
        </NavigationLikWrapper>
        <NavigationLikWrapper>
          <NavigationLink to="services" isActive={pathname === "services"}>
            Services
          </NavigationLink>
        </NavigationLikWrapper>
        <NavigationLikWrapper>
          <NavigationLink to="contactus" isActive={pathname === "contactus"}>
            Contact Us
          </NavigationLink>
        </NavigationLikWrapper>
        <NavigationLikWrapper>
          <NavigationLink to="aboutus" isActive={pathname === "aboutus"}>
            About Us
          </NavigationLink>
        </NavigationLikWrapper>
      </NavigationList>
    );
  }

  // const { onCloseSidePanel } = props;

  return (
    <NavigationList>
      {/* <NavigationLikWrapper onClick={() => onCloseSidePanel()}> */}
      <NavigationLikWrapper>
        <NavigationLink to="/" isActive={pathname === "/"}>
          Home
        </NavigationLink>
      </NavigationLikWrapper>
      <NavigationLikWrapper>
        <NavigationLink to="menu" isActive={pathname === "menu"}>
          Menu
        </NavigationLink>
      </NavigationLikWrapper>
      <NavigationLikWrapper>
        <NavigationLink to="services" isActive={pathname === "services"}>
          Services
        </NavigationLink>
      </NavigationLikWrapper>
      <NavigationLikWrapper>
        <NavigationLink to="contactus" isActive={pathname === "contactus"}>
          Contact Us
        </NavigationLink>
      </NavigationLikWrapper>
      <NavigationLikWrapper>
        <NavigationLink to="aboutus" isActive={pathname === "aboutus"}>
          About Us
        </NavigationLink>
      </NavigationLikWrapper>
    </NavigationList>
  );
}
