import { ShoppingBasket } from "@mui/icons-material";
import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import BasketItem from "../BasketItem/BasketItem";

const Basket = (props) => {
  const { order = [], removeFromOrder, cartOpen, closeCart } = props;
  return (
    <Drawer anchor="right" open={cartOpen} onClose={closeCart}>
      <List sx={{ width: "400px" }}>
        <ListItem>
          <ListItemIcon>
            <ShoppingBasket></ShoppingBasket>
          </ListItemIcon>
          <ListItemText primary="Trash" />
        </ListItem>
        <Divider />
        {!order.length ? (
          <>Trash is empty</>
        ) : (
          <>
            {order.map((item) => (
              <BasketItem
                key={item.name}
                {...item}
                removeFromOrder={removeFromOrder}
              />
            ))}
            <Divider />
            <ListItem>
              <Typography sx={{ fontWeight: 700 }}>
                {" "}
                Общая стоимость:{" "}
                {order.reduce((acc, item) => {
                  return acc + item.price * item.quantity;
                }, 0)}{" "}
                рублей.
              </Typography>
            </ListItem>
          </>
        )}
      </List>
    </Drawer>
  );
};

export default Basket;
