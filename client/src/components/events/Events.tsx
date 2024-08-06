import { type FC } from "react";

import { useTranslation } from 'react-i18next';

import  Headers  from './../headers/Headers.tsx';

import {
  EventsWrapper,
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
  const {t} = useTranslation();

  return (
    <EventsWrapper>
      <Headers title={t('headers.events')} />
      <EventList>
        <EventDescriptionLeft>
          <EventMonth>{t('events.eventOneMonth')}</EventMonth>
          <EventDetails>
            <EventDetailsTitle>{t('events.eventOneDate')}</EventDetailsTitle>
            <EventDetailsDescription>
            {t('events.eventOneDescription')}
            </EventDetailsDescription>
            <EventDetailsShowButton>
              <span>{t('buttons.more')}</span>
            </EventDetailsShowButton>
          </EventDetails>
        </EventDescriptionLeft>
        <EventImageRigth src="./food-truck-festival.jpeg" />
        <EventImageLeft src="./foodtrucks-event-one.jpeg" />
        <EventDescriptionRigth>
          <EventMonth>{t('events.eventTwoMonth')}</EventMonth>
          <EventDetails>
            <EventDetailsTitle>{t('events.eventTwoDate')}</EventDetailsTitle>
            <EventDetailsDescription>
            {t('events.eventTwoDescription')}
            </EventDetailsDescription>
            <EventDetailsShowButton>
              <span>{t('buttons.more')}</span>
            </EventDetailsShowButton>
          </EventDetails>
        </EventDescriptionRigth>
      </EventList>
    </EventsWrapper>
  );
};

export default Events;
