import { type FC } from "react";

import {
  EventsWrapper,
  EventsTitle,
  Divisor,
  EventList,
  EventDescriptionRigth,
  EventImageRigth,
  EventImageLeft,
  EventDescriptionLeft,
  EventMonth,
  EventDetails,
  EventDetailsTitle,
  EventDetailsDescription,
  EventDetailsShowButton,
} from "./styled";

const Events: FC = () => {
  return (
    <EventsWrapper>
      <EventsTitle>Eventos</EventsTitle>
      <Divisor />
      <EventList>
        <EventDescriptionLeft>
          <EventMonth>Mayo</EventMonth>
          <EventDetails>
            <EventDetailsTitle>MAYO 3</EventDetailsTitle>
            <EventDetailsDescription>
              Festival de FoodTrucks
            </EventDetailsDescription>
            <EventDetailsShowButton>
              <span>Ver más</span>
            </EventDetailsShowButton>
          </EventDetails>
        </EventDescriptionLeft>
        <EventImageRigth src="./food-truck-festival.jpeg" />
        <EventImageLeft src="./foodtrucks-event-one.jpeg" />
        <EventDescriptionRigth>
          <EventMonth>Mayo</EventMonth>
          <EventDetails>
            <EventDetailsTitle>MAYO 5</EventDetailsTitle>
            <EventDetailsDescription>
              Festival de FoodTrucks
            </EventDetailsDescription>
            <EventDetailsShowButton>
              <span>Ver más</span>
            </EventDetailsShowButton>
          </EventDetails>
        </EventDescriptionRigth>
      </EventList>
    </EventsWrapper>
  );
};

export default Events;
