import styled from 'styled-components';
import { Link } from './Link.tsx';

type NavigationLinksProps = {
  isActive?: boolean,
  openSidePanel?: boolean,
  onClick: () => void
}

export const NavigationList = styled.ul`
    display: flex;
    align-content: center;
    justify-content: space-around;
    height: 80%;
    width: 100%;
    flex-direction: column;
    padding: 0;
  @media(min-width: 668px) {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }
`;

/*none of the attributes on this link are working */
export const NavigationLink = styled(Link)<NavigationLinksProps>`
  padding: 4px 8px;
  width: 100%;
  height: 100%;
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
  cursor: pointer;
  height: 50px;
  border-radius: 10px;
  &:hover {
      background-color: #fce2ab;
    }
`;