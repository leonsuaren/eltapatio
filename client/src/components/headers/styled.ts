import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  width: 100%;
`;

export const EventsTitle = styled.h1`
  font-weight: 500;
  margin: 20px 0 0 20px;
  @media (min-width: 768px) {
    margin: 20px 0 0 50px;
  }
`;

export const Divisor = styled.div`
  width: 95%;
  height: 5px;
  background-color: ${props => props.theme.primaryBlue};
  align-self: center;
  border-radius: 10px;
  margin: 0 0 50px 0;
  @media (min-width: 768px) {
    width: 30%;
    align-self: flex-start;
    margin: 0 0 50px 50px;
  }
`;