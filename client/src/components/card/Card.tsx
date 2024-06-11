import { type FC } from "react";

import {
  CardStyled,
  CardImage,
  CardTitle,
  CardDescription,
  CardButton,
} from "./Styled.ts";

type CardProps = {
  image: {
    src: string;
    alt: string;
  },
  title: string,
  description: string
}

const Card: FC<CardProps> = ({ image, title, description }) => {
  return (
    <CardStyled>
      <CardImage {...image} />
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
      <CardButton><span>Ordenar</span></CardButton>
    </CardStyled>
  );
};

export default Card;
