import { type FC } from 'react';

import {
  EventsWrapper,
  EventsTitle,
  Divisor,
  EventList,
  EventDescriptionRigth,
  EventImageRigth,
  EventImageLeft,
  EventDescriptionLeft
} from './styled';

const Events: FC = () => {
  return(
    <EventsWrapper>
    <EventsTitle>Eventos</EventsTitle>
    <Divisor />
    <EventList>
      <EventDescriptionRigth>one</EventDescriptionRigth>
      <EventImageRigth />
      <EventImageLeft />
      <EventDescriptionLeft>four</EventDescriptionLeft>
    </EventList>
  </EventsWrapper>
  )
}

export default Events;