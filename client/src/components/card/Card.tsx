import { type FC } from "react";

import {
  CardStyled,
  CardImage,
  CardTitle,
  CardDescription,
  CardButton,
} from "./Styled.ts";

const Card: FC = () => {
  return (
    <CardStyled>
      <CardImage src="./Torta-Ahogada.webp" />
      <CardTitle>Torta Ahogada</CardTitle>
      <CardDescription>Ordenala Con Tu Carne Favorita!!</CardDescription>
      <CardButton><span>Ordernar</span></CardButton>
    </CardStyled>
  );
};

export default Card;
