import { styled } from 'styled-components';
import { Link } from './Link.tsx'

export const Navigation = styled.nav`
  display: grid;
  grid-template-columns: 30% 40% 30%;
  align-items: center;
  width: auto;
  height: 82px;
  background-color: #FFFFFF;
  padding: 0 80px;
  margin: 0;
`;

export const Logo = styled.img`
  width: 100px;
  height: 50px;
`;

export const NavigationList = styled.ul`
  display: flex;
  justify-content: space-around;
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