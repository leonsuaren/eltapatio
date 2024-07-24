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
  description: string,
  type: boolean
}

const Card: FC<CardProps> = ({ image, title, description, type }) => {
  return (
    <CardStyled $large={type}>
      <CardImage {...image} />
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
      <CardButton><span>Ver mas</span></CardButton>
    </CardStyled>
  );
};

export default Card;
