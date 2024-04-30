import { type FC } from 'react';

import { BookButtonStyled, BookButtonDeliverIcon, BookButtonDeliver } from './styled.ts';

const BookButton: FC = () => {
  return (
    <BookButtonStyled><div><span>Book El Tapatio FoodTruck</span></div><BookButtonDeliver><BookButtonDeliverIcon /></BookButtonDeliver></BookButtonStyled>
  )
}

export default BookButton;