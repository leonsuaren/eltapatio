import { type FC } from "react";

import { BookButtonStyled, BookButtonDeliver, BookButtonDeliverImage } from "./styled.ts";

const BookButton: FC = () => {
  return (
    <BookButtonStyled>
      <div>
        <span>Book El Tapatio</span>
      </div>
      <BookButtonDeliver>
        <BookButtonDeliverImage src="./foodtruckBookButton.png"/>
      </BookButtonDeliver>
    </BookButtonStyled>
  );
};

export default BookButton;
