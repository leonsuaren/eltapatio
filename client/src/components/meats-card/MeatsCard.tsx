import { type FC } from "react";

import { Card, CardIcon, CardImageHolder, CardTitle } from "./styled.ts";

type MeatsCardProps = {
  title: string;
  image: {
    src: string,
    alt: string
  }
};

const MeatsCard: FC<MeatsCardProps> = ({ title, image }) => {
  return (
    <Card>
      <CardIcon>
        <CardImageHolder {...image} />
      </CardIcon>
      <CardTitle>{title}</CardTitle>
    </Card>
  );
};

export default MeatsCard;
