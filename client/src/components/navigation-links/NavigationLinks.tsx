import { useLocation } from "react-router-dom";
import { Suspense } from 'react';
import { useTranslation } from 'react-i18next';

import {
  NavigationList,
  NavigationLink,
  NavigationLikWrapper,
} from "./styled.ts";

type SidePanelProps = {
  mode: "sidePanel",
  onCloseSidePanel: () => void;
}

type NavbarProps = {
  mode: "navbar"
}

type NavigationLinksProps = SidePanelProps | NavbarProps;

 function NavigationLinks(
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

  const { onCloseSidePanel } = props;

  return (
    <NavigationList>
      <NavigationLikWrapper onClick={() => onCloseSidePanel()}>
        <NavigationLink to="/" isActive={pathname === "/"}>
          {t('NavigationLinksTranslation.home')}
        </NavigationLink>
      </NavigationLikWrapper>
      <NavigationLikWrapper onClick={() => onCloseSidePanel()}>
        <NavigationLink to="menu" isActive={pathname === "menu"}>
          {t('NavigationLinksTranslation.menu')}
        </NavigationLink>
      </NavigationLikWrapper>
      <NavigationLikWrapper onClick={() => onCloseSidePanel()}>
        <NavigationLink to="services" isActive={pathname === "services"}>
        {t('NavigationLinksTranslation.services')}
        </NavigationLink>
      </NavigationLikWrapper>
      <NavigationLikWrapper onClick={() => onCloseSidePanel()}>
        <NavigationLink to="contactus" isActive={pathname === "contactus"}>
        {t('NavigationLinksTranslation.contactus')}
        </NavigationLink>
      </NavigationLikWrapper>
      <NavigationLikWrapper onClick={() => onCloseSidePanel()}>
        <NavigationLink to="aboutus" isActive={pathname === "aboutus"}>
        {t('NavigationLinksTranslation.aboutus')}
        </NavigationLink>
      </NavigationLikWrapper>
    </NavigationList>
  );
}

export default function WrappedNavigationLinks({onCloseSidePanel}: NavigationLinksProps) {
  return(
    <Suspense>
      <NavigationLinks onCloseSidePanel={onCloseSidePanel}/>
    </Suspense>
  )
}
