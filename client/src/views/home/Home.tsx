import { Suspense } from "react";

import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();

  return (
    <main>
      <h1>{t('navigation.home')}</h1>
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