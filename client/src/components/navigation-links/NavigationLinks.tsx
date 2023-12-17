import { Suspense } from "react";

import { useLocation } from "react-router-dom";

import { useTranslation } from "react-i18next";

import {
  NavigationList,
  NavigationLink,
  NavigationLikWrapper,
} from "./styled.ts";

type SidePanelProps = {
  mode: "sidePanel";
  // onCloseSidePanel: () => void;
};

type NavbarProps = {
  mode: "navbar";
};

type NavigationLinksProps = SidePanelProps | NavbarProps;

function NavigationLinks(props: NavigationLinksProps) {
  const { pathname } = useLocation();
  const { t } = useTranslation();
  const { mode } = props;

  if (mode === "navbar") {
    return (
      <NavigationList>
        <NavigationLikWrapper>
          <NavigationLink to="/" isActive={pathname === "/"}>
            {t('navigation.home')}
          </NavigationLink>
        </NavigationLikWrapper>
        <NavigationLikWrapper>
          <NavigationLink to="menu" isActive={pathname === "menu"}>
            {t('navigation.menu')}
          </NavigationLink>
        </NavigationLikWrapper>
        <NavigationLikWrapper>
          <NavigationLink to="services" isActive={pathname === "services"}>
            {t('navigation.services')}
          </NavigationLink>
        </NavigationLikWrapper>
        <NavigationLikWrapper>
          <NavigationLink to="contactus" isActive={pathname === "contactus"}>
            {t('navigation.contactus')}
          </NavigationLink>
        </NavigationLikWrapper>
        <NavigationLikWrapper>
          <NavigationLink to="aboutus" isActive={pathname === "aboutus"}>
            {t('navigation.aboutus')}
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
          {t("navigation.home")}
        </NavigationLink>
      </NavigationLikWrapper>
      <NavigationLikWrapper>
        <NavigationLink to="menu" isActive={pathname === "menu"}>
          {t("navigation.menu")}
        </NavigationLink>
      </NavigationLikWrapper>
      <NavigationLikWrapper>
        <NavigationLink to="services" isActive={pathname === "services"}>
          {t("navigation.services")}
        </NavigationLink>
      </NavigationLikWrapper>
      <NavigationLikWrapper>
        <NavigationLink to="contactus" isActive={pathname === "contactus"}>
          {t("navigation.contactus")}
        </NavigationLink>
      </NavigationLikWrapper>
      <NavigationLikWrapper>
        <NavigationLink to="aboutus" isActive={pathname === "aboutus"}>
          {t("navigation.aboutus")}
        </NavigationLink>
      </NavigationLikWrapper>
    </NavigationList>
  );
}

export default function WrappedNavigationLinks({ mode }: NavigationLinksProps) {
  return (
    <Suspense fallback="loading">
      <NavigationLinks mode={mode} />
    </Suspense>
  );
}
