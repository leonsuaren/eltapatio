import { type FC } from 'react';
import { HeaderWrapper, EventsTitle, Divisor } from './styled.ts';

type HeadersProps = { title: string }

const Headers: FC<HeadersProps> = ({ title } ) => {
  return (
    <HeaderWrapper>
      <EventsTitle>{title}</EventsTitle>
      <Divisor />
    </HeaderWrapper>
  )
}

export default Headers;