import { type FC } from "react";

import {
  MenuLayout,
  ImageContainer,
  HeaderImage,
  MenuWrapper,
  MenuDisplay,
  MenuItemDisplay,
} from "./styled.ts";
import Headers from "../../components/headers/Headers.tsx";
import MenuItem from "../../components/menu-item/MenuItem.tsx";

const Menu: FC = () => {
  return (
    <MenuLayout>
      <ImageContainer>
        <HeaderImage src="./tamales.webp" />
      </ImageContainer>
      <MenuWrapper>
        <MenuDisplay>
          <Headers title="Desayunos" />
          <MenuItemDisplay>
            <MenuItem
              itemTitle="Chilaquiles"
              itemDescription="Los mejores del mundo!!"
              itemPrice={8.99}
              itemImage={{
                src: "./platillo-tipico.webp",
                alt: "tacos de azada",
              }}
            >
              <button>Order Now</button>
            </MenuItem>
            <MenuItem
              itemTitle="Menudo"
              itemDescription="Los mejores del mundo!!"
              itemPrice={8.99}
              itemImage={{
                src: "./platillo-tipico.webp",
                alt: "tacos de azada",
              }}
            >
              <button>Order Now</button>
            </MenuItem>
            <MenuItem
              itemTitle="Molletes"
              itemDescription="Los mejores del mundo!!"
              itemPrice={8.99}
              itemImage={{
                src: "./platillo-tipico.webp",
                alt: "tacos de azada",
              }}
            >
              <button>Order Now</button>
            </MenuItem>
            <MenuItem
              itemTitle="Tamales"
              itemDescription="Los mejores del mundo!!"
              itemPrice={8.99}
              itemImage={{
                src: "./platillo-tipico.webp",
                alt: "tacos de azada",
              }}
            >
              <button>Order Now</button>
            </MenuItem>
          </MenuItemDisplay>
        </MenuDisplay>
      </MenuWrapper>
      <ImageContainer>
        <HeaderImage src="./platillo-tipico.jpeg" />
      </ImageContainer>
      <MenuWrapper>
                <MenuDisplay>
          <Headers title="Platos fuertes" />
          <MenuItemDisplay>
            <MenuItem
              itemTitle="Tacos de Azada"
              itemDescription="Los mejores del mundo!!"
              itemPrice={8.99}
              itemImage={{
                src: "./platillo-tipico.webp",
                alt: "tacos de azada",
              }}
            >
              <button>Order Now</button>
            </MenuItem>
            <MenuItem
              itemTitle="Tacos de Azada"
              itemDescription="Los mejores del mundo!!"
              itemPrice={8.99}
              itemImage={{
                src: "./platillo-tipico.webp",
                alt: "tacos de azada",
              }}
            >
              <button>Order Now</button>
            </MenuItem>
            <MenuItem
              itemTitle="Tacos de Azada"
              itemDescription="Los mejores del mundo!!"
              itemPrice={8.99}
              itemImage={{
                src: "./platillo-tipico.webp",
                alt: "tacos de azada",
              }}
            >
              <button>Order Now</button>
            </MenuItem>
            <MenuItem
              itemTitle="Tacos de Azada"
              itemDescription="Los mejores del mundo!!"
              itemPrice={8.99}
              itemImage={{
                src: "./platillo-tipico.webp",
                alt: "tacos de azada",
              }}
            >
              <button>Order Now</button>
            </MenuItem>
            <MenuItem
              itemTitle="Tacos de Azada"
              itemDescription="Los mejores del mundo!!"
              itemPrice={8.99}
              itemImage={{
                src: "./platillo-tipico.webp",
                alt: "tacos de azada",
              }}
            >
              <button>Order Now</button>
            </MenuItem>
          </MenuItemDisplay>
        </MenuDisplay>
      </MenuWrapper>
      <ImageContainer>
        <HeaderImage src="./Mexican-Cuisine.jpeg" />
      </ImageContainer>
      <MenuWrapper>
                <MenuDisplay>
          <Headers title="Cenas" />
          <MenuItemDisplay>
            <MenuItem
              itemTitle="Tacos de Azada"
              itemDescription="Los mejores del mundo!!"
              itemPrice={8.99}
              itemImage={{
                src: "./platillo-tipico.webp",
                alt: "tacos de azada",
              }}
            >
              <button>Order Now</button>
            </MenuItem>
            <MenuItem
              itemTitle="Tacos de Azada"
              itemDescription="Los mejores del mundo!!"
              itemPrice={8.99}
              itemImage={{
                src: "./platillo-tipico.webp",
                alt: "tacos de azada",
              }}
            >
              <button>Order Now</button>
            </MenuItem>
            <MenuItem
              itemTitle="Tacos de Azada"
              itemDescription="Los mejores del mundo!!"
              itemPrice={8.99}
              itemImage={{
                src: "./platillo-tipico.webp",
                alt: "tacos de azada",
              }}
            >
              <button>Order Now</button>
            </MenuItem>
            <MenuItem
              itemTitle="Tacos de Azada"
              itemDescription="Los mejores del mundo!!"
              itemPrice={8.99}
              itemImage={{
                src: "./platillo-tipico.webp",
                alt: "tacos de azada",
              }}
            >
              <button>Order Now</button>
            </MenuItem>
            <MenuItem
              itemTitle="Tacos de Azada"
              itemDescription="Los mejores del mundo!!"
              itemPrice={8.99}
              itemImage={{
                src: "./platillo-tipico.webp",
                alt: "tacos de azada",
              }}
            >
              <button>Order Now</button>
            </MenuItem>
          </MenuItemDisplay>
        </MenuDisplay>
      </MenuWrapper>
    </MenuLayout>
  );
};

export default Menu;
