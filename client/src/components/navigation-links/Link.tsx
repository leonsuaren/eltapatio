import { Link as ReactRouterDomLink } from 'react-router-dom';
import { type PropsWithChildren } from 'react';

type NavigationLinkProps = PropsWithChildren<{ to: string, isActive: boolean }>;

export const Link = ({  to, children }: NavigationLinkProps) => {
  return(
    <ReactRouterDomLink to={to}>
      {children}
    </ReactRouterDomLink>
  );
}