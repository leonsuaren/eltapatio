import styled, { css } from "styled-components";

export const AboutUsHeader = styled.header`
  width: 100%;
  height: 200px;
  background: ${(props) => props.theme.lightYellowBackground};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;
`;

export const AboutUsLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 20px 0px;
  @media (min-width: 768px) {
    display: grid;
    justify-items: center;
    align-items: center;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(8, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 100px;
    margin: auto;
    width: 80%;
  }
`;

function divisorComunStyled() {
  return css`
    width: 1px;
    height: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${(props) => props.theme.primaryFontColor};
  `;
}

export const FirstDivisor = styled.div`
  /* .div2 { grid-area: 1 / 3 / 3 / 4; } */
  grid-area: 1 / 3 / 3 / 4;
  ${divisorComunStyled}
`;

export const SecondDivisor = styled.div`
  /* .div5 { grid-area: 3 / 3 / 5 / 4; */
  grid-area: 3 / 3 / 5 / 4;
  ${divisorComunStyled}
`;

export const ThirdDivisor = styled.div`
  /* .div8 { grid-area: 5 / 3 / 7 / 4; } */
  grid-area: 5 / 3 / 7 / 4;
  ${divisorComunStyled}
`;

export const FourthDivisor = styled.div`
  /* .div11 { grid-area: 7 / 3 / 9 / 4; } */
  grid-area: 7 / 3 / 9 / 4;
  ${divisorComunStyled}
`;

//First picture mosaic

function pictureBasicStyled() {
  return css`
    border-radius: 20px;
    width: 100%;
    height: 100%;
    box-shadow: ${(props) => props.theme.primaryBoxShadow};
  `;
}

export const FirstPicturesWrapper = styled.section`
  /* .div1 { grid-area: 1 / 1 / 3 / 3; } */
  grid-area: 1 / 1 / 3 / 3;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(10, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  width: 450px;
  height: 450px;
`;

export const PictureMosaicFirstImage = styled.img`
  grid-area: 1 / 2 / 4 / 4;
  ${pictureBasicStyled}
`;

export const PictureMosaicSecondImage = styled.img`
  grid-area: 5 / 1 / 9 / 4;
  ${pictureBasicStyled}
`;

export const PictureMosaicThirdImage = styled.img`
  grid-area: 3 / 5 / 7 / 9;
  ${pictureBasicStyled}
`;

export const PictureMosaicFourthImage = styled.img`
  grid-area: 8 / 5 / 11 / 9;
  ${pictureBasicStyled}
`;

//First picture mosaic

//Second picture mosaic

export const SecondPictureWrapper = styled.section`
  /* .div6 { grid-area: 3 / 4 / 5 / 6; } */
  grid-area: 3 / 4 / 5 / 6;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(12, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  width: 450px;
  height: 450px;
`;

export const PictureMosaicFifthImage = styled.img`
  grid-area: 1 / 1 / 6 / 6;
  ${pictureBasicStyled}
`;

export const PictureMosaicSixthImage = styled.img`
  grid-area: 8 / 8 / 13 / 13;
  ${pictureBasicStyled}
`;

export const PictureMosaicSeventhImage = styled.img`
  grid-area: 2 / 4 / 12 / 10;
  border-radius: 20px;
  width: 100%;
  height: 100%;
`;
//Second picture mosaic

//Text holder

function textWrapper() {
  return css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  `;
}

export const FirstTextWrapper = styled.section`
  /* .div3 { grid-area: 1 / 4 / 3 / 6; } */
  grid-area: 1 / 4 / 3 / 6;
  ${textWrapper}
`;

export const TextTitle = styled.h2``;

export const TextContent = styled.p`
  text-align: center;
`;

export const SecondTextWrapper = styled.section`
  /* .div4 { grid-area: 3 / 1 / 5 / 3; } */
  grid-area: 3 / 1 / 5 / 3;
  ${textWrapper}
`;

export const ThirdTextWrapper = styled.section`
  /* .div9 { grid-area: 5 / 4 / 7 / 6; } */
  grid-area: 5 / 4 / 7 / 6;
  ${textWrapper}
`;

export const FourthTextWrapper = styled.section`
  /* .div10 { grid-area: 7 / 1 / 9 / 3; } */
  grid-area: 7 / 1 / 9 / 3;
  ${textWrapper}
`;
//Text holder
