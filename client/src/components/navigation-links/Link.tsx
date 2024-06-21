import { Link as ReactRouterDomLink } from "react-router-dom";
import { type PropsWithChildren } from "react";
import styled from "styled-components";

type NavigationLinkProps = PropsWithChildren<{ to: string; $isActive: boolean }>;

const NavigationLink = styled(ReactRouterDomLink)<NavigationLinkProps>`
  width: 100%;
  font-size: 1.1rem;
  cursor: pointer;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  box-sizing: border-box;
  background-color: ${(props) => (props.$isActive ? props.theme.currentPageYellow : "")};
  font-weight: ${(props) => (props.$isActive ? "bold" : "")}};
`;

export const Link = ({ to, children, $isActive }: NavigationLinkProps) => {
  return (
    <NavigationLink to={to} $isActive={$isActive}>
      {children}
    </NavigationLink>
  );
};
