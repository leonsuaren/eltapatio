import { Suspense } from "react";

import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t, i18n } = useTranslation();

  return (
    <main>
      <h1>{t('navigation.home')}</h1>
      <button onClick={() =>i18n.changeLanguage('en')}>English</button>
      <button onClick={() =>i18n.changeLanguage('es')}>Español</button>
    </main>
  )
}

export default function WrappedHome() {
  return (
    <Suspense fallback='Loading'>
      <Home />
    </Suspense>
  )
}