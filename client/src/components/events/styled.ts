import styled from 'styled-components';

export const EventsWrapper = styled.section`
  display: flex;
  flex-direction: column;
  background-color: #fcf9f2;
`;

export const EventsTitle = styled.h1`
  font-weight: 500;
  margin: 20px 0 0 20px;
  @media (min-width: 668px) {
    margin: 20px 0 0 50px;
  }
`;

export const Divisor = styled.div`
  width: 95%;
  height: 5px;
  background-color: #23b2b2;
  align-self: center;
  border-radius: 10px;
  margin: 0 0 50px 0;
  @media (min-width: 668px) {
    width: 30%;
    align-self: flex-start;
    margin: 0 0 50px 50px;
  }
`;

export const EventList = styled.div`
  justify-items: center;
  align-items: center;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
`;

export const EventImageRigth = styled.img`

`;

export const EventDescriptionRigth = styled.div`
  width: 50%;
  height: 200px;
`;

export const EventImageLeft = styled.img`

`;

export const EventDescriptionLeft = styled.div`

`;
