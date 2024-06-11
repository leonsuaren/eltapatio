import { type FC } from "react";

import {
  MenuLayout,
  ImageContainer,
  HeaderImage,
  MenuWrapper,
  MenuDisplay,
  MenuTitleHolder
} from "./styled.ts";
import Headers from "../../components/headers/Headers.tsx";

const Menu: FC = () => {
  return (
    <MenuLayout>
      <ImageContainer>
        <HeaderImage src="./tamales.webp" />
      </ImageContainer>
      <MenuWrapper>
        <MenuDisplay>
          <Headers title="Desayunos"/>
          <MenuTitleHolder>hola</MenuTitleHolder>
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
