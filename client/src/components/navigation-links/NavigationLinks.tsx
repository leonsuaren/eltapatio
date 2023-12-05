import { useLocation } from "react-router-dom";

import { NavigationList, NavigationLink } from "./styled.ts";

export default function NavigationLinks() {
  const { pathname } = useLocation();

  return (
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
  );
}
