import { styled } from 'styled-components';
import { Link } from './Link.tsx'

export const Navigation = styled.nav`
  display: grid;
  grid-template-columns: 30% 40% 30%;
  grid-template-rows: 100%;
  align-items: center;
  justify-items: center;
  width: auto;
  height: 82px;
  background-color: #FFFFFF;
  padding: 5px 10px;
  margin: 0;
`;

export const Logo = styled.img`
  width: 100px;
  height: 50px;
  grid-column: 2 / 3;
`;

export const NavigationList = styled.ul`
  display: flex;
  justify-content: space-around;
  display: none;
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


// @media only screen and (min-width: 300px) {
//   .window-header {
//     display: grid;
//     grid-template-columns: 7% 7% 7% 30%;
//   }
// }

// @media only screen and (min-width: 600px) {
//   .window-header {
//     display: grid;
//     grid-template-columns: 5% 5% 5% 25%;
//   }
// }

// @media only screen and (min-width: 768px) {
//   .window-header {
//     display: grid;
//     grid-template-columns: 4% 4% 4% 20%;
//   }
// }

// @media only screen and (min-width: 967px) {
//   .window-header {
//     display: grid;
//     grid-template-columns: 3% 3% 3% 30%;
//   }
// }