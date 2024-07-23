import { useTranslation } from "react-i18next";

import {
  AboutUsHeader,
  AboutUsLayout,
  FirstPicturesWrapper,
  FirstDivisor,
  SecondDivisor,
  SecondPictureWrapper,
  PictureMosaicFirstImage,
  PictureMosaicSecondImage,
  PictureMosaicThirdImage,
  PictureMosaicFourthImage,
  PictureMosaicFifthImage,
  PictureMosaicSixthImage,
  PictureMosaicSeventhImage
} from "./styled.ts";

const AboutUs = () => {
  const { t } = useTranslation();

  return (
    <main>
      <AboutUsHeader>
        <h1>{t("viewsHeaders.about")}</h1>
      </AboutUsHeader>
      <AboutUsLayout>
        <FirstPicturesWrapper>
          <PictureMosaicFirstImage src="./grouppeople.avif" />
          <PictureMosaicSecondImage src="./grouppeople.avif" />
          <PictureMosaicThirdImage src="./grouppeople.avif" />
          <PictureMosaicFourthImage src="./grouppeopletwo.webp" />
        </FirstPicturesWrapper>
        <FirstDivisor />
        <SecondDivisor />
        <SecondPictureWrapper>
          <PictureMosaicFifthImage src="mosaicTacos.jpeg"/>
          <PictureMosaicSixthImage src="biriatacos.jpeg"/>
          <PictureMosaicSeventhImage src="chipotletacos.jpeg"/>
        </SecondPictureWrapper>
      </AboutUsLayout>
    </main>
  );
};

export default AboutUs;
