import { FC, useContext } from 'react';
import { SidePanelContext } from '../../context/side-panel-context/SidePanelContext.tsx';
import { MenuButtonStyled, ImgStyeld } from './styled.ts';

const MenuButton: FC = () => {
const sidePanelContext = useContext(SidePanelContext);


return (
  <MenuButtonStyled onClick={() => sidePanelContext.openSidePanel()}>
    <ImgStyeld src="./kebab-menu.svg" />
  </MenuButtonStyled>
)
}

export default MenuButton;