import styled from "styled-components";

export const MenuLayout = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const ImageContainer = styled.div`
  width: 100%;
  overflow: hidden;
  @media (min-width: 768px) {
    height: 300px;
  }
`;

export const HeaderImage = styled.img`
  width: 100%;
`;

//Menu
export const MenuWrapper = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 30px 0px;
`;

export const MenuDisplay = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.lightYellowBackground};
  padding: 0 0 20px 0;
  @media (min-width: 768px) {
    width: 80%;
  }
`;

export const MenuItemDisplay = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
`;

//Menu
