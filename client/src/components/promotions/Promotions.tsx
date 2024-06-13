import { type FC } from "react";

import { useTranslation } from 'react-i18next';

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
  const { t } = useTranslation();

  return (
    <PromotionsWrapper>
      <Headers title={t('headers.promotions')}/>
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
