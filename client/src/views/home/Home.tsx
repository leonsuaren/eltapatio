import { Suspense } from "react";

import { useTranslation } from "react-i18next";

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
    <div>
      <HomeBanner>
        <FoodTruckImage src="FoodTruck.png" />
        <BannerContent>
          <BannerContentSlogan>
            <ContactUsButtonWrapper>
              <ContactUsButton>
                <span>{t('buttons.contactus')}</span>
              </ContactUsButton>
            </ContactUsButtonWrapper>
            <SloganText>
              <SloganFirstPart>{t('brand.sloganFirst')}</SloganFirstPart>
              <SloganVacio>{t('brand.sloganVacio')}</SloganVacio>
              <SloganFirstPart>{t('brand.sloganSecond')}</SloganFirstPart>
            </SloganText>
            <OrderNowButtonWrapper>
              <OrderNowButton>
                <span>{t('buttons.ordernow')}</span>
              </OrderNowButton>
            </OrderNowButtonWrapper>
          </BannerContentSlogan>
          <BannerCards>
            <CardOne>
              <Card title='Torta Ahogada' description="La mejor del mundo!!" image={{ src: "./Torta-Ahogada.webp", alt: "Torta Ahogada" }}/>
            </CardOne>
            <CardTwo>
              <Card title='Quesadillas' description="Para todos los gustos!!" image={{ src: "./quesadillas.webp", alt: "Quesadillas" }}/>
            </CardTwo>
            <CardThree>
              <Card title="Tacos" description="Nunca pueden faltar!!" image={{ src: "./tacos.jpeg", alt: "Tacos" }}/>
            </CardThree>
            <CardFour>
              <Card title="Sopes" description="Como hechos en casa!!" image={{ src: "./sopes.jpeg", alt: "Sopes" }}/>
            </CardFour>
            <CardFive>
              <Card title="Tortas" description="No te quedes con las ganas" image={{ src: "./tortas.png", alt: "Tortas"  }}/>
            </CardFive>
          </BannerCards>
        </BannerContent>
      </HomeBanner>
      <HomeLayout>
        <Events />
        <OurMeats />
        <Promotions />
      </HomeLayout>
    </div>
  );
};

// const Home = () => {
//   const { t } = useTranslation();

//   return (
//     <HomeLayout>
//       <h1>{t('navigation.home')}</h1>
//     </HomeLayout>
//   )
// }

export default function WrappedHome() {
  return (
    <Suspense fallback="Loading">
      <Home />
    </Suspense>
  );
}
