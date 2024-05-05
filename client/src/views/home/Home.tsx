import { Suspense } from "react";

import {
  HomeLayout,
  FoodTruckImage,
  HomeBanner,
  BannerContent,
  BannerContentSlogan,
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

// import { useTranslation } from 'react-i18next';

const Home = () => {
  // const { t } = useTranslation();

  return (
    <HomeLayout>
      <HomeBanner>
        <FoodTruckImage src="FoodTruck.png" />
        <BannerContent>
          <BannerContentSlogan>
            <ContactUsButton>
              <span>Contactanos</span>
            </ContactUsButton>
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
            <CardOne>One</CardOne>
            <CardTwo>Tow</CardTwo>
            <CardThree>Three</CardThree>
            <CardFour>Four</CardFour>
            <CardFive>Five</CardFive>
          </BannerCards>
        </BannerContent>
      </HomeBanner>
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
