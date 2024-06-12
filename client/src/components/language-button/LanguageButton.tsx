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
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const [languageSwitch, setLanguageSwitch] = useState<string>(currentLanguage);
  const { t } = useTranslation();
  const { mode } = props;


  console.log(currentLanguage);
  console.log(languageSwitch);
  const handleOnSwitchLanguage = (lang: string) => {
    if (lang === "en") {
      setLanguageSwitch("es");
    } else if (lang === "es") {
      setLanguageSwitch("en");
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
