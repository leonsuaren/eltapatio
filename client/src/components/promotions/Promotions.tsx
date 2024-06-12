import { type FC } from "react";

import  Headers  from './../headers/Headers.tsx';

import {
  PromotionsWrapper,
  PromotionsSection,
  PromotionsImage,
  Promotion,
  PromotionTitle,
  PromotionDescription,
  PromotionsDetailsShowButton
} from "./styled.ts";

const Promotions: FC = () => {
  return (
    <PromotionsWrapper>
      <Headers title="Promociones"/>
      <PromotionsSection>
        <PromotionsImage src="./comida-mexicana.webp" />
        <Promotion>
          <PromotionTitle>TACO TUESDAY</PromotionTitle>
          <PromotionDescription>Todos los martes tacos al dos por uno!!!</PromotionDescription>
          <PromotionsDetailsShowButton><span>Ver Mas</span></PromotionsDetailsShowButton>
        </Promotion>
      </PromotionsSection>
    </PromotionsWrapper>
  );
};

export default Promotions;
