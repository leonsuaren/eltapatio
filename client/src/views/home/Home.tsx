import { Suspense } from "react";

import {
  HomeLayout,
  FoodTruckImage,
  HomeBanner,
  BannerContent,
  BannerContentSlogan,
  ContactUsButtonWrapper,
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
  CardFive,
} from "./styled.ts";
import Card from "../../components/card/Card.tsx";

// import { useTranslation } from 'react-i18next';

const Home = () => {
  // const { t } = useTranslation();

  return (
    <HomeLayout>
      <HomeBanner>
        <FoodTruckImage src="FoodTruck.png" />
        <BannerContent>
          <BannerContentSlogan>
            <ContactUsButtonWrapper>
              <ContactUsButton>
                <span>Contactanos</span>
              </ContactUsButton>
            </ContactUsButtonWrapper>
            <SloganText>
              <SloganFirstPart>Si Un Día Sientes Un...</SloganFirstPart>
              <SloganVacio>VACIO</SloganVacio>
              <SloganFirstPart>Como Que Es Hambre!!</SloganFirstPart>
            </SloganText>
            <OrderNowButton>
              <span>Order Now</span>
            </OrderNowButton>
          </BannerContentSlogan>
          <BannerCards>
            <CardOne>
              <Card />
            </CardOne>
            <CardTwo>
              <Card />
            </CardTwo>
            <CardThree>
              <Card />
            </CardThree>
            <CardFour>
              <Card />
            </CardFour>
            <CardFive>
              <Card />
            </CardFive>
          </BannerCards>
        </BannerContent>
      </HomeBanner>
      <div>hola</div>
    </HomeLayout>
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
