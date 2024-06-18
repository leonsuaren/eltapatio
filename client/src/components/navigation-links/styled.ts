import styled from "styled-components";

export const Navigation = styled.ul`
  display: flex;
  align-content: center;
  justify-content: space-around;
  height: 80%;
  width: 100%;
  flex-direction: column;
  padding: 0;
  @media (min-width: 668px) {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 50px;
  }
`;

export const NavigationList = styled.li`
  background: transparent;
  border: none;
  width: 100%;
  font-size: 1.1rem;
  cursor: pointer;
  height: 100%;
  margin: 1px;
  border-radius: 10px;
  text-decoration: none;
  list-style-type: none;
  &:hover {
    background-color: #fce2ab;
  }
`;
