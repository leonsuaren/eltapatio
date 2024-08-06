import styled from "styled-components";

export const MenuItemWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  width: 100%;
  margin: 10px 0px;
`;

export const MenuItemImage = styled.img`
  grid-area: 1 / 1 / 2 / 5;
  width: 100%;
  height: 100%;
  @media (min-width: 667px) and (max-width: 768px) {
    grid-area: 1 / 1 / 2 / 4;
  }
  @media (min-width: 768px) {
    grid-area: 1 / 1 / 2 / 2;
  }
`;

//Details
export const MenuItemDetails = styled.div`
  grid-area: 1 / 4 / 2 / 8;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  padding: 20px 50px;
  @media (min-width: 768px) {
    grid-area: 1 / 2 / 2 / 8;
  }
`;
export const MenuItemTitle = styled.h3`
  margin: 0;
`;

export const MenuItemDescription = styled.p`
  margin: 0;
  display: none;
  @media (min-width: 768px) {
    display: flex;
  }
`;
//Details

//Price
export const MenuItemPrice = styled.div`
  display: none;
  @media (min-width: 768px) {
    grid-area: 1 / 8 / 2 / 9;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
//Price

export const MenuItemButton = styled.div`
  grid-area: 1 / 8 / 2 / 11;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (min-width: 768px) {
    grid-area: 1 / 9 / 2 / 11;
  }
`;
