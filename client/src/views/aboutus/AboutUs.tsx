import { useTranslation } from "react-i18next";

import SectionHeader from "../../components/section-header/SectionHeader.tsx";

import {
  AboutUsLayout,
  FirstPicturesWrapper,
  FirstDivisor,
  SecondDivisor,
  ThirdDivisor,
  FourthDivisor,
  SecondPictureWrapper,
  PictureMosaicFirstImage,
  PictureMosaicSecondImage,
  PictureMosaicThirdImage,
  PictureMosaicFourthImage,
  PictureMosaicFifthImage,
  PictureMosaicSixthImage,
  PictureMosaicSeventhImage,
  FirstTextWrapper,
  TextTitle,
  TextContent,
  SecondTextWrapper,
  ThirdTextWrapper,
  FourthTextWrapper,
} from "./styled.ts";

const AboutUs = () => {
  const { t } = useTranslation();

  return (
    <>
      <SectionHeader translation="viewsHeaders.about" />
      <AboutUsLayout>
        <FirstDivisor />
        <FirstTextWrapper>
          <TextTitle>{t('aboutUs.aBitAboutUs')}</TextTitle>
          <TextContent>
            Aliquip do cupidatat irure incididunt consequat ullamco laborum sint
            consectetur nostrud. Cupidatat ex enim esse laboris ex consectetur
            aute reprehenderit ea ea occaecat. Anim qui ea culpa proident
            proident minim fugiat et tempor sunt culpa. Est ad sit magna qui
            sunt consectetur elit ut ea enim. Non voluptate nisi aliquip id.
            Culpa est nisi consectetur anim tempor culpa nostrud. Mollit
            excepteur aliqua aute quis laboris reprehenderit ipsum mollit. Elit
            est fugiat aute elit excepteur. Sunt laboris non proident eiusmod
            aliqua proident. Amet elit proident consectetur magna labore sint
            pariatur dolor. Id magna nulla ea quis sint duis excepteur excepteur
            aliqua ad sint. Aute sit tempor eiusmod ad Lorem enim eiusmod
            ullamco consectetur. Do consectetur elit nisi in fugiat duis veniam
            veniam. Amet est ad do deserunt exercitation fugiat minim
            reprehenderit ea proident enim laborum.
          </TextContent>
        </FirstTextWrapper>
        <FirstPicturesWrapper>
          <PictureMosaicFirstImage src="./grouppeople.avif" />
          <PictureMosaicSecondImage src="./grouppeople.avif" />
          <PictureMosaicThirdImage src="./grouppeople.avif" />
          <PictureMosaicFourthImage src="./grouppeopletwo.webp" />
        </FirstPicturesWrapper>
        <SecondDivisor />
        <SecondTextWrapper>
          <TextTitle>{t('aboutUs.whatWeDo')}</TextTitle>
          <TextContent>
            Aliquip do cupidatat irure incididunt consequat ullamco laborum sint
            consectetur nostrud. Cupidatat ex enim esse laboris ex consectetur
            aute reprehenderit ea ea occaecat. Anim qui ea culpa proident
            proident minim fugiat et tempor sunt culpa. Est ad sit magna qui
            sunt consectetur elit ut ea enim. Non voluptate nisi aliquip id.
            Culpa est nisi consectetur anim tempor culpa nostrud. Mollit
            excepteur aliqua aute quis laboris reprehenderit ipsum mollit. Elit
            est fugiat aute elit excepteur. Sunt laboris non proident eiusmod
            aliqua proident. Amet elit proident consectetur magna labore sint
            pariatur dolor. Id magna nulla ea quis sint duis excepteur excepteur
            aliqua ad sint. Aute sit tempor eiusmod ad Lorem enim eiusmod
            ullamco consectetur. Do consectetur elit nisi in fugiat duis veniam
            veniam. Amet est ad do deserunt exercitation fugiat minim
            reprehenderit ea proident enim laborum.
          </TextContent>
        </SecondTextWrapper>
        <SecondPictureWrapper>
          <PictureMosaicFifthImage src="mosaicTacos.jpeg" />
          <PictureMosaicSixthImage src="biriatacos.jpeg" />
          <PictureMosaicSeventhImage src="chipotletacos.jpeg" />
        </SecondPictureWrapper>
        <ThirdDivisor />
        <ThirdTextWrapper>
          <TextTitle>{t('aboutUs.whereWeWantToBe')}</TextTitle>
          <TextContent>
            Aliquip do cupidatat irure incididunt consequat ullamco laborum sint
            consectetur nostrud. Cupidatat ex enim esse laboris ex consectetur
            aute reprehenderit ea ea occaecat. Anim qui ea culpa proident
            proident minim fugiat et tempor sunt culpa. Est ad sit magna qui
            sunt consectetur elit ut ea enim. Non voluptate nisi aliquip id.
            Culpa est nisi consectetur anim tempor culpa nostrud. Mollit
            excepteur aliqua aute quis laboris reprehenderit ipsum mollit. Elit
            est fugiat aute elit excepteur. Sunt laboris non proident eiusmod
            aliqua proident. Amet elit proident consectetur magna labore sint
            pariatur dolor. Id magna nulla ea quis sint duis excepteur excepteur
            aliqua ad sint. Aute sit tempor eiusmod ad Lorem enim eiusmod
            ullamco consectetur. Do consectetur elit nisi in fugiat duis veniam
            veniam. Amet est ad do deserunt exercitation fugiat minim
            reprehenderit ea proident enim laborum.
          </TextContent>
        </ThirdTextWrapper>
        <FourthTextWrapper>
          <TextTitle>{t('aboutUs.whatMakeUsDifferent')}</TextTitle>
          <TextContent>
            Aliquip do cupidatat irure incididunt consequat ullamco laborum sint
            consectetur nostrud. Cupidatat ex enim esse laboris ex consectetur
            aute reprehenderit ea ea occaecat. Anim qui ea culpa proident
            proident minim fugiat et tempor sunt culpa. Est ad sit magna qui
            sunt consectetur elit ut ea enim. Non voluptate nisi aliquip id.
            Culpa est nisi consectetur anim tempor culpa nostrud. Mollit
            excepteur aliqua aute quis laboris reprehenderit ipsum mollit. Elit
            est fugiat aute elit excepteur. Sunt laboris non proident eiusmod
            aliqua proident. Amet elit proident consectetur magna labore sint
            pariatur dolor. Id magna nulla ea quis sint duis excepteur excepteur
            aliqua ad sint. Aute sit tempor eiusmod ad Lorem enim eiusmod
            ullamco consectetur. Do consectetur elit nisi in fugiat duis veniam
            veniam. Amet est ad do deserunt exercitation fugiat minim
            reprehenderit ea proident enim laborum.
          </TextContent>
        </FourthTextWrapper>
        <FourthDivisor />
      </AboutUsLayout>
    </>
  );
};

export default AboutUs;
