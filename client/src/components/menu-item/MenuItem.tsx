import { type PropsWithChildren, type FC } from "react";

import {
  MenuItemWrapper,
  MenuItemImage,
  MenuItemDetails,
  MenuItemTitle,
  MenuItemDescription,
  MenuItemPrice,
  MenuItemButton,
} from "./styled.ts";

type MenuItemProps = PropsWithChildren<{
  itemTitle: string;
  itemDescription: string;
  itemPrice: number;
  itemImage: {
    src: string;
    alt: string;
  };
}>;

const MenuItem: FC<MenuItemProps> = ({
  itemTitle,
  itemDescription,
  itemPrice,
  itemImage,
  children
}) => {
  return (
    <MenuItemWrapper>
      <MenuItemImage {...itemImage} />
      <MenuItemDetails>
        <MenuItemTitle>{itemTitle}</MenuItemTitle>
        <MenuItemDescription>{itemDescription}</MenuItemDescription>
      </MenuItemDetails>
      <MenuItemPrice>${itemPrice}</MenuItemPrice>
      <MenuItemButton>{children}</MenuItemButton>
    </MenuItemWrapper>
  );
};

export default MenuItem;
