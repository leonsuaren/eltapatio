import { type FC, useState } from 'react';

import { LanguageButtonStyled, LanButtonInsideSwitch } from './styled';

import { useTranslation } from 'react-i18next';

const LanguageButton: FC = () => {

  const [ languageSwitch, setLanguageSwitch ] = useState<string>('en');
  const { i18n } = useTranslation();

  const currentLanguage = i18n.language;
  const handleOnSwitchLanguage = (lang: string) => {
    if (lang === 'es') {
      setLanguageSwitch('en');
    } else if (lang === 'en') {
      setLanguageSwitch('es');
    }
     i18n.changeLanguage(languageSwitch)
  }

  return (
    <LanguageButtonStyled>
      <LanButtonInsideSwitch onClick={() => handleOnSwitchLanguage(currentLanguage)}><span>Español</span></LanButtonInsideSwitch>
    </LanguageButtonStyled>
  ) 
}

export default LanguageButton