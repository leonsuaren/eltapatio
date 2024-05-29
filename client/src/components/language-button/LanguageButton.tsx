import { useState } from "react";

import { LanguageButtonStyled, LanguageButtonResponsiveStyled } from "./styled";

import { useTranslation } from "react-i18next";

type SidePannelProps = {
  mode: "sidePannel";
};

type NavbarProps = {
  mode: "navbar";
};

type LanguageButtonProps = SidePannelProps | NavbarProps;

function LanguageButton (props: LanguageButtonProps) {
  const [languageSwitch, setLanguageSwitch] = useState<string>("en");
  const { i18n } = useTranslation();
  const { t } = useTranslation();
  const { mode } = props;


  const currentLanguage = i18n.language;
  const handleOnSwitchLanguage = (lang: string) => {
    if (lang === "es") {
      setLanguageSwitch("en");
    } else if (lang === "en") {
      setLanguageSwitch("es");
    }
    i18n.changeLanguage(languageSwitch);
  };

  if (mode === 'navbar') {
    return (
      <LanguageButtonStyled
      onClick={() => handleOnSwitchLanguage(currentLanguage)}
      >
      {t('language.switch')}
    </LanguageButtonStyled>
  );
}
  if (mode === 'sidePannel') {
    return (
      <LanguageButtonResponsiveStyled
      onClick={() => handleOnSwitchLanguage(currentLanguage)}
      >
      {t('language.switch')}
    </LanguageButtonResponsiveStyled>
    )
  }
}

export default LanguageButton;
