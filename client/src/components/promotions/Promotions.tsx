import { type FC } from "react";

import {
  PromotionsWrapper,
  PromotionsTitle,
  Divisor,
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
      <PromotionsTitle>Promociones</PromotionsTitle>
      <Divisor />
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
