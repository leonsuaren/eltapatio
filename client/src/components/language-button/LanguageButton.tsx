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
  let languageSwitch = '';
  const { t } = useTranslation();
  const { mode } = props;

  const handleOnSwitchLanguage = (lang: string) => {
    if (lang === "en") {
      languageSwitch = "es"
    } else if (lang === "es") {
      languageSwitch = "en"
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
