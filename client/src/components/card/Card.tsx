import { type FC } from "react";

import MoreButton from "../more-button/MoreButton.tsx";

import {
  CardStyled,
  CardImage,
  CardTitle,
  CardDescription,
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
      <MoreButton moreText="buttons.more"/>
    </CardStyled>
  );
};

export default Card;
