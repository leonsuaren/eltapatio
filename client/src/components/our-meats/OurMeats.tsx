import { type FC } from "react";

import  Headers  from './../headers/Headers.tsx';
import MeatsCard from "../meats-card/MeatsCard.tsx";

import { OurMeatsWrapper, OurMeatsContainer } from "./styled.ts";


const OurMeats: FC = () => {
  return (
    <OurMeatsWrapper>
      <Headers title="Nuestras Carnes" />
      <OurMeatsContainer>
        <MeatsCard title="POLLO" image={{ src: "./pollo-icon.jpeg", alt: "pollo" }} />
        <MeatsCard title="CAMARON" image={{ src: "./camaron-icon.webp",  alt: "camaron" }}></MeatsCard>
        <MeatsCard title="AZADA" image={{ src: "./azada-icon.png", alt: "azada" }}></MeatsCard>
        <MeatsCard title="PASTOR" image={{ src: "./pastor-icon.jpeg", alt: "pastor" }}></MeatsCard>
        <MeatsCard title="BIRRIA" image={{ src: "birria-icon.jpeg", alt: "birria" }}></MeatsCard>
      </OurMeatsContainer>
    </OurMeatsWrapper>
  );
};

export default OurMeats;
