import styled from "styled-components";

export const EventsWrapper = styled.section`
  display: flex;
  flex-direction: column;
  background-color: #fcf9f2;
  padding-bottom: 50px;
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

//Events List
export const EventList = styled.div`
  justify-items: center;
  align-items: center;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  align-self: center;
  justify-self: center;
  @media (min-width: 668px) {
    width: 50%;
  }
`;

export const EventDescriptionRigth = styled.div`
  width: 100%;
  height: 200px;
  background: #efb83c;
  padding: 20px 15px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  @media (min-width: 668px) {
    height: 377px;
  }
`;

export const EventImageRigth = styled.img`
  width: 100%;
  height: 200px;
  @media (min-width: 668px) {
    height: 377px;
  }
`;
export const EventDescriptionLeft = styled.div`
  width: 100%;
  height: 200px;
  background: #efb83c;
  padding: 20px 15px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  @media (min-width: 668px) {
    height: 377px;
  }
`;

export const EventImageLeft = styled.img`
  width: 100%;
  height: 200px;
  @media (min-width: 668px) {
    height: 377px;
  }
`;

export const EventMonth = styled.h2`
  margin: 0;
`;

export const EventDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
`;

export const EventDetailsTitle = styled.h4`
  margin: 15px 0px 5px 0px;
`;

export const EventDetailsDescription = styled.p`
  margin: 5p 0px;
  font-size: 0.8rem;
`;

export const EventDetailsShowButton = styled.button`
  padding: 5px;
  background-color: #b51c1a;
  border: none;
  border-radius: 5px;
  width: 80px;
  color: #FFFFFF;
  height: 30px;
  cursor: pointer;
  box-shadow: 3px 3px 3px #7c7b7b;
  align-self: flex-start;
  justify-self: flex-end;
  margin: 0;
`;
//Events List
