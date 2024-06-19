import { FC, Suspense, useContext } from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { SidePanelContext } from "../../context/side-panel-context/SidePanelContext.tsx";
import { Link } from "./Link.tsx";

import { Navigation, NavigationList } from "./styled.ts";

type SidePannelProps = {
  mode: "sidePannel";
};

type NavbarProps = {
  mode: "navbar";
};

type NavigationLinksProps = SidePannelProps | NavbarProps;

function NavigationLinks(props: NavigationLinksProps) {
  const sidePanelContext = useContext(SidePanelContext);
  const { pathname } = useLocation();
  const { t } = useTranslation();
  const { mode } = props;

  if (mode === "navbar") {
    return (
      <Navigation>
        <NavigationList>
          <Link to="/" isActive={pathname === "/"}>
            {t("navigation.home")}
          </Link>
        </NavigationList>
        <NavigationList>
          <Link to="menu" isActive={pathname === "/menu"}>
            {t("navigation.menu")}
          </Link>
        </NavigationList>
        <NavigationList>
          <Link to="services" isActive={pathname === "/services"}>
            {t("navigation.services")}
          </Link>
        </NavigationList>
        <NavigationList>
          <Link to="contactus" isActive={pathname === "/contactus"}>
            {t("navigation.contactus")}
          </Link>
        </NavigationList>
        <NavigationList>
          <Link to="aboutus" isActive={pathname === "/aboutus"}>
            {t("navigation.aboutus")}
          </Link>
        </NavigationList>
      </Navigation>
    );
  }

  return (
    <Navigation>
      <NavigationList onClick={() => sidePanelContext.closeSidePanel()}>
        <Link to="/" isActive={pathname === "/"}>
          {t("navigation.home")}
        </Link>
      </NavigationList>
      <NavigationList onClick={() => sidePanelContext.closeSidePanel()}>
        <Link to="menu" isActive={pathname === "/menu"}>
          {t("navigation.menu")}
        </Link>
      </NavigationList>
      <NavigationList onClick={() => sidePanelContext.closeSidePanel()}>
        <Link to="services" isActive={pathname === "/services"}>
          {t("navigation.services")}
        </Link>
      </NavigationList>
      <NavigationList onClick={() => sidePanelContext.closeSidePanel()}>
        <Link to="contactus" isActive={pathname === "/contactus"}>
          {t("navigation.contactus")}
        </Link>
      </NavigationList>
      <NavigationList onClick={() => sidePanelContext.closeSidePanel()}>
        <Link to="aboutus" isActive={pathname === "/aboutus"}>
          {t("navigation.aboutus")}
        </Link>
      </NavigationList>
    </Navigation>
  );
}

const WrappedNavigationLinks: FC<NavigationLinksProps> = ({ mode }) => {
  return (
    <Suspense fallback="loading">
      <NavigationLinks mode={mode} />
    </Suspense>
  );
};

export default WrappedNavigationLinks;
