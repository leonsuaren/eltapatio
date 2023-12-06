import styled from 'styled-components';
import { Link } from './Link.tsx';

export const NavigationList = styled.ul`
    display: flex;
    align-content: center;
    justify-content: space-around;
    height: 100%;
    width: auto;
    flex-direction: column;
    flex-wrap: wrap;
  @media(min-width: 668px) {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }
`;

export const NavigationLink = styled(Link)<{ isActive: boolean }>`
  padding: 4px 8px;
  display: flex;
  text-align: center;
  box-sizing: border-box;
  margin: auto 0;
  font-weight: ${props => props.isActive ? "bold" : "normal"};
  &:hover {
    font-size: 1.9rem;
  }
`;