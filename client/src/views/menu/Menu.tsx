import { type FC } from "react";

import {
  MenuLayout,
  ImageContainer,
  HeaderImage,
  MenuWrapper,
  MenuDisplay,
  MenuTitleHolder
} from "./styled.ts";

const Menu: FC = () => {
  return (
    <MenuLayout>
      <ImageContainer>
        <HeaderImage src="./tamales.webp" />
      </ImageContainer>
      <MenuWrapper>
        <MenuDisplay>
          <MenuTitleHolder  />
          <h1>hola</h1>
        </MenuDisplay>
      </MenuWrapper>
      <ImageContainer>
        <HeaderImage src="./platillo-tipico.jpeg" />
      </ImageContainer>
      <MenuWrapper>
        <h1>hola</h1>
      </MenuWrapper>
      <ImageContainer>
        <HeaderImage src="./Mexican-Cuisine.jpeg" />
      </ImageContainer>
      <MenuWrapper>
        <h1>hola</h1>
      </MenuWrapper>
    </MenuLayout>
  );
};

export default Menu;
