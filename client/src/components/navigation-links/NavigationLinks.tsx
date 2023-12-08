import { useLocation } from "react-router-dom";

import {
  NavigationList,
  NavigationLink,
  NavigationLikWrapper,
} from "./styled.ts";

type NavigationLinksProps = {
  onCloseSidePanel: () => void;
};

export default function NavigationLinks({
  onCloseSidePanel,
}: NavigationLinksProps) {
  const { pathname } = useLocation();

  return (
    <NavigationList>
      <NavigationLikWrapper onClick={() => onCloseSidePanel()}>
        <NavigationLink to="/" isActive={pathname === "/"}>
          Home
        </NavigationLink>
      </NavigationLikWrapper>
      <NavigationLikWrapper onClick={() => onCloseSidePanel()}>
        <NavigationLink to="menu" isActive={pathname === "menu"}>
          Menu
        </NavigationLink>
      </NavigationLikWrapper>
      <NavigationLikWrapper onClick={() => onCloseSidePanel()}>
        <NavigationLink to="services" isActive={pathname === "services"}>
          Services
        </NavigationLink>
      </NavigationLikWrapper>
      <NavigationLikWrapper onClick={() => onCloseSidePanel()}>
        <NavigationLink to="contactus" isActive={pathname === "contactus"}>
          Contact Us
        </NavigationLink>
      </NavigationLikWrapper>
      <NavigationLikWrapper onClick={() => onCloseSidePanel()}>
        <NavigationLink to="aboutus" isActive={pathname === "aboutus"}>
          About Us
        </NavigationLink>
      </NavigationLikWrapper>
    </NavigationList>
  );
}
