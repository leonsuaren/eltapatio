import { Suspense } from "react";
import { useTranslation } from 'react-i18next';

import {
  HomeLayout,
  FoodTruckImage,
  HomeBanner,
  BannerContent,
  BannerContentSlogan,
  ContactUsButtonWrapper,
  OrderNowButtonWrapper,
  ContactUsButton,
  OrderNowButton,
  SloganText,
  SloganFirstPart,
  SloganVacio,
  BannerCards,
  CardOne,
  CardTwo,
  CardThree,
  CardFour,
  CardFive
} from "./styled.ts";
import Card from "../../components/card/Card.tsx";
import Events from "../../components/events/Events.tsx";
import OurMeats from "../../components/our-meats/OurMeats.tsx";
import Promotions from "../../components/promotions/Promotions.tsx";


const Home = () => {
  const { t } = useTranslation();

  return (
    <>
      <HomeBanner>
        <FoodTruckImage src="FoodTruck.png" />
        <BannerContent>
          <BannerContentSlogan>
            <ContactUsButtonWrapper>
              <ContactUsButton>
                <span>{t('navigation.contactus')}</span>
              </ContactUsButton>
            </ContactUsButtonWrapper>
            <SloganText>
              <SloganFirstPart>{t('brand.sloganFirst')}</SloganFirstPart>
              <SloganVacio>{t('brand.sloganVacio')}</SloganVacio>
              <SloganFirstPart>{t('brand.sloganSecond')}</SloganFirstPart>
            </SloganText>
            <OrderNowButtonWrapper>
              <OrderNowButton disabled>
                <span>{t('buttons.orderHere')}</span>
              </OrderNowButton>
            </OrderNowButtonWrapper>
          </BannerContentSlogan>
          <BannerCards>
            <CardOne>
              <Card type={true} title='Torta Ahogada' description={t('dishPromotionPhrase.dishPromotionPhraseOne')} image={{ src: "./Torta-Ahogada.webp", alt: "Torta Ahogada" }}/>
            </CardOne>
            <CardTwo>
              <Card type={true} title='Quesadillas' description={t('dishPromotionPhrase.dishPromotionPhraseTwo')} image={{ src: "./quesadillas.webp", alt: "Quesadillas" }}/>
            </CardTwo>
            <CardThree>
              <Card type={true} title="Tacos" description={t('dishPromotionPhrase.dishPromotionPhraseThree')} image={{ src: "./tacos.jpeg", alt: "Tacos" }}/>
            </CardThree>
            <CardFour>
              <Card type={true} title="Sopes" description={t('dishPromotionPhrase.dishPromotionPhraseFour')} image={{ src: "./sopes.jpeg", alt: "Sopes" }}/>
            </CardFour>
            <CardFive>
              <Card type={false} title="Tortas" description={t('dishPromotionPhrase.dishPromotionPhraseFive')} image={{ src: "./tortas.jpeg", alt: "Tortas"  }}/>
            </CardFive>
          </BannerCards>
        </BannerContent>
      </HomeBanner>
      <HomeLayout>
        <Events />
        <OurMeats />
        <Promotions />
      </HomeLayout>
    </>
  );
};

export default function WrappedHome() {
  return (
    <Suspense fallback="Loading">
      <Home />
    </Suspense>
  );
}
