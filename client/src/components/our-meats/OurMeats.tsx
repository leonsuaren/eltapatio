import { type FC } from "react";

import { useTranslation } from 'react-i18next';

import  Headers  from './../headers/Headers.tsx';
import MeatsCard from "../meats-card/MeatsCard.tsx";

import { OurMeatsWrapper, OurMeatsContainer } from "./styled.ts";


const OurMeats: FC = () => {
  const { t } = useTranslation();

  return (
    <OurMeatsWrapper>
      <Headers title={t('headers.ourMeats')} />
      <OurMeatsContainer>
        <MeatsCard title={t('meats.chicken')} image={{ src: "./pollo-icon.jpeg", alt: "pollo" }} />
        <MeatsCard title={t('meats.shrimp')} image={{ src: "./camaron-icon.webp",  alt: "camaron" }}></MeatsCard>
        <MeatsCard title={t('meats.azada')} image={{ src: "./azada-icon.png", alt: "azada" }}></MeatsCard>
        <MeatsCard title={t('meats.pastor')} image={{ src: "./pastor-icon.jpeg", alt: "pastor" }}></MeatsCard>
        <MeatsCard title={t('meats.birria')} image={{ src: "birria-icon.jpeg", alt: "birria" }}></MeatsCard>
      </OurMeatsContainer>
    </OurMeatsWrapper>
  );
};

export default OurMeats;
