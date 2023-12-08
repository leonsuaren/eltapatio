import { MenuButtonStyled, ImgStyeld } from './styled.ts';

type MenuButtonProps = {
  onCloseSidePanel: () => void
}

export default function MenuButton({onCloseSidePanel}: MenuButtonProps) {


return (
  <MenuButtonStyled onClick={() => onCloseSidePanel}>
    <ImgStyeld src="./kebab-menu.svg" />
  </MenuButtonStyled>
)
}