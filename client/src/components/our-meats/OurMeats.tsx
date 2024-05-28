import { type FC } from "react";

import { OurMeatsWrapper, OurMetatsTitle, OurMeatsDivisor, OurMeatsContainer } from "./styled.ts";
import MeatsCard from "../meats-card/MeatsCard.tsx";

const OurMeats: FC = () => {
  return (
    <OurMeatsWrapper>
      <OurMetatsTitle>Nuestras Carnes</OurMetatsTitle>
      <OurMeatsDivisor />
      <OurMeatsContainer>
        <MeatsCard/>
        <MeatsCard></MeatsCard>
        <MeatsCard></MeatsCard>
        <MeatsCard></MeatsCard>
        <MeatsCard></MeatsCard>
      </OurMeatsContainer>
    </OurMeatsWrapper>
  );
};

export default OurMeats;
