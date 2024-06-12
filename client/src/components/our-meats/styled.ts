import styled from "styled-components";

export const OurMeatsWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
