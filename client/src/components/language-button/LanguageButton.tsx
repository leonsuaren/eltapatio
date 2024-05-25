import { type FC, useState } from "react";

import { LanguageButtonStyled } from "./styled";

import { useTranslation } from "react-i18next";

const LanguageButton: FC = () => {
  const [languageSwitch, setLanguageSwitch] = useState<string>("en");
  const { i18n } = useTranslation();
  const { t } = useTranslation();


  const currentLanguage = i18n.language;
  const handleOnSwitchLanguage = (lang: string) => {
    if (lang === "es") {
      setLanguageSwitch("en");
    } else if (lang === "en") {
      setLanguageSwitch("es");
    }
    i18n.changeLanguage(languageSwitch);
  };

  return (
    <LanguageButtonStyled
      onClick={() => handleOnSwitchLanguage(currentLanguage)}
    >
      {t('language.switch')}
    </LanguageButtonStyled>
  );
};

export default LanguageButton;
