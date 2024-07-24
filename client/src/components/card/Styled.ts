import styled, { css } from "styled-components";

type CardStyledProps = {
  $large: boolean;
};

function LargeCardStyled({ $large }: CardStyledProps) {
  if ($large) {
    return css`
      width: 140px;
    `;
  } else {
    return css`
      width: 325px;
    `;
  }
}

export const CardStyled = styled.div<CardStyledProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  ${LargeCardStyled}
  height: 248px;
  background-color: ${props => props.theme.backgroundWhite};
  border-radius: 5px;
  box-shadow: ${props => props.theme.primaryBoxShadow};
  padding: 10px;
  @media (min-width: 768px) {
    width: 140px;
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: 119px;
  border-radius: 5px;
`;

export const CardTitle = styled.h4`
  margin: 0px;
`;

export const CardDescription = styled.p`
  font-size: 0.9rem;
  text-align: center;
`;
