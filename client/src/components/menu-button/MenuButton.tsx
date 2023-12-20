import { type FC } from 'react';
import { MenuButtonStyled, ImgStyeld } from './styled.ts';

const MenuButton: FC = () => {

return (
  <MenuButtonStyled>
    <ImgStyeld src="./kebab-menu.svg" />
  </MenuButtonStyled>
)
}

export default MenuButton;