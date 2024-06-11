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
      <CardDescription>Ordenala con tu carne favorita!!</CardDescription>
      <CardButton><span>Ordenar</span></CardButton>
    </CardStyled>
  );
};

export default Card;
