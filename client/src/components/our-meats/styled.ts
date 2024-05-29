import styled from "styled-components";

export const OurMeatsWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

//Our Meats Title
export const OurMetatsTitle = styled.h1`
  font-weight: 500;
  margin: 20px 0 0 20px;
  @media (min-width: 668px) {
    margin: 20px 0 0 50px;
    align-self: flex-start;
  }
`;

export const OurMeatsDivisor = styled.div`
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

export const OurMeatsContainer = styled.div`
  width: 100%;
  height: 220px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 50px;
  align-items: center;
  justify-items: center;
  overflow: scroll;
  scroll-snap-type: x mandatory;
`;
//Our Meats Title
