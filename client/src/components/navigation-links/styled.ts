import styled from 'styled-components';
import { Link } from './Link.tsx';

type NavigationLinksProps = {
  isActive?: boolean
}

export const NavigationList = styled.ul`
    display: flex;
    align-content: center;
    justify-content: space-around;
    height: 80%;
    width: auto;
    flex-direction: column;
    flex-wrap: wrap;
    padding: 0;
  @media(min-width: 668px) {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }
`;

/*non if the attributes on this link are working */
export const NavigationLink = styled(Link)<NavigationLinksProps>`
  padding: 4px 8px;
  display: flex;
  text-align: center;
  box-sizing: border-box;
  margin: auto 0;
  color: ${props => props.isActive ? 'blue' : 'white'};
  font-weight: ${props => props.isActive ? 'bold' : 'italic'}};
`;

export const NavigationLikWrapper = styled.button`
  background: transparent;
  border: none;
  width: 100%;
  font-size: 1.1rem;
`;