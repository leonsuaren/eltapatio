import { type FC } from "react";
import { useTranslation } from "react-i18next"; 

import {
  MenuLayout,
  ImageContainer,
  HeaderImage,
  MenuWrapper,
  MenuDisplay,
  MenuItemDisplay
} from "./styled.ts";
import Headers from "../../components/headers/Headers.tsx";
import MenuItem from "../../components/menu-item/MenuItem.tsx";
import MoreButton from "../../components/more-button/MoreButton.tsx";

const Menu: FC = () => {
  const { t } = useTranslation();

  return (
    <MenuLayout>
      <ImageContainer>
        <HeaderImage src="./tamales.webp" />
      </ImageContainer>
      <MenuWrapper>
        <MenuDisplay>
          <Headers title={t('headers.breakfast')} />
          <MenuItemDisplay>
            <MenuItem
              itemTitle="Tacos"
              itemDescription="Los mejores del mundo!"
              itemPrice={8.99}
              itemImage={{
                src: "./platillo-tipico.jpeg",
                alt: "tacos de azada",
              }}
            >
              <MoreButton moreText="buttons.more"/>
            </MenuItem>
            <MenuItem
              itemTitle="Menudo"
              itemDescription="Los mejores del mundo!"
              itemPrice={8.99}
              itemImage={{
                src: "./platillo-tipico.jpeg",
                alt: "tacos de azada",
              }}
            >
              <MoreButton moreText="buttons.more"/>
            </MenuItem>
            <MenuItem
              itemTitle="Molletes"
              itemDescription="Los mejores del mundo!"
              itemPrice={8.99}
              itemImage={{
                src: "./platillo-tipico.jpeg",
                alt: "tacos de azada",
              }}
            >
              <MoreButton moreText="buttons.more"/>
            </MenuItem>
            <MenuItem
              itemTitle="Tamales"
              itemDescription="Los mejores del mundo!"
              itemPrice={8.99}
              itemImage={{
                src: "./platillo-tipico.jpeg",
                alt: "tacos de azada",
              }}
            >
              <MoreButton moreText="buttons.more"/>
            </MenuItem>
          </MenuItemDisplay>
        </MenuDisplay>
      </MenuWrapper>
      <ImageContainer>
        <HeaderImage src="./platillo-tipico.jpeg" />
      </ImageContainer>
      <MenuWrapper>
                <MenuDisplay>
          <Headers title={t('headers.lunch')} />
          <MenuItemDisplay>
            <MenuItem
              itemTitle="Tacos de Azada"
              itemDescription="Los mejores del mundo!"
              itemPrice={8.99}
              itemImage={{
                src: "./platillo-tipico.jpeg",
                alt: "tacos de azada",
              }}
            >
              <MoreButton moreText="buttons.more"/>
            </MenuItem>
            <MenuItem
              itemTitle="Tacos de Azada"
              itemDescription="Los mejores del mundo!"
              itemPrice={8.99}
              itemImage={{
                src: "./platillo-tipico.jpeg",
                alt: "tacos de azada",
              }}
            >
              <MoreButton moreText="buttons.more"/>
            </MenuItem>
            <MenuItem
              itemTitle="Tacos de Azada"
              itemDescription="Los mejores del mundo!"
              itemPrice={8.99}
              itemImage={{
                src: "./platillo-tipico.jpeg",
                alt: "tacos de azada",
              }}
            >
              <MoreButton moreText="buttons.more"/>
            </MenuItem>
            <MenuItem
              itemTitle="Tacos de Azada"
              itemDescription="Los mejores del mundo!"
              itemPrice={8.99}
              itemImage={{
                src: "./platillo-tipico.jpeg",
                alt: "tacos de azada",
              }}
            >
              <MoreButton moreText="buttons.more"/>
            </MenuItem>
            <MenuItem
              itemTitle="Tacos de Azada"
              itemDescription="Los mejores del mundo!"
              itemPrice={8.99}
              itemImage={{
                src: "./platillo-tipico.jpeg",
                alt: "tacos de azada",
              }}
            >
              <MoreButton moreText="buttons.more"/>
            </MenuItem>
          </MenuItemDisplay>
        </MenuDisplay>
      </MenuWrapper>
      <ImageContainer>
        <HeaderImage src="./Mexican-Cuisine.jpeg" />
      </ImageContainer>
      <MenuWrapper>
                <MenuDisplay>
          <Headers title={t('headers.dinner')} />
          <MenuItemDisplay>
            <MenuItem
              itemTitle="Tacos de Azada"
              itemDescription="Los mejores del mundo!"
              itemPrice={8.99}
              itemImage={{
                src: "./platillo-tipico.jpeg",
                alt: "tacos de azada",
              }}
            >
              <MoreButton moreText="buttons.more"/>
            </MenuItem>
            <MenuItem
              itemTitle="Tacos de Azada"
              itemDescription="Los mejores del mundo!"
              itemPrice={8.99}
              itemImage={{
                src: "./platillo-tipico.jpeg",
                alt: "tacos de azada",
              }}
            >
              <MoreButton moreText="buttons.more"/>
            </MenuItem>
            <MenuItem
              itemTitle="Tacos de Azada"
              itemDescription="Los mejores del mundo!"
              itemPrice={8.99}
              itemImage={{
                src: "./platillo-tipico.jpeg",
                alt: "tacos de azada",
              }}
            >
              <MoreButton moreText="buttons.more"/>
            </MenuItem>
            <MenuItem
              itemTitle="Tacos de Azada"
              itemDescription="Los mejores del mundo!"
              itemPrice={8.99}
              itemImage={{
                src: "./platillo-tipico.jpeg",
                alt: "tacos de azada",
              }}
            >
              <MoreButton moreText="buttons.more"/>
            </MenuItem>
            <MenuItem
              itemTitle="Tacos de Azada"
              itemDescription="Los mejores del mundo!"
              itemPrice={8.99}
              itemImage={{
                src: "./platillo-tipico.jpeg",
                alt: "tacos de azada",
              }}
            >
              <MoreButton moreText="buttons.more"/>
            </MenuItem>
          </MenuItemDisplay>
        </MenuDisplay>
      </MenuWrapper>
    </MenuLayout>
  );
};

export default Menu;
