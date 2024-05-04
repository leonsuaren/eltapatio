import { type FC } from 'react';

import { BookButtonStyled, BookButtonDeliverIcon, BookButtonDeliver } from './styled.ts';

const BookButton: FC = () => {
  return (
    <BookButtonStyled><div><span>Book El Tapatio</span></div><BookButtonDeliver><BookButtonDeliverIcon /></BookButtonDeliver></BookButtonStyled>
  )
}

export default BookButton;