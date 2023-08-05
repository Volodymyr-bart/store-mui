import { Close } from "@mui/icons-material";
import { IconButton, ListItem, Typography } from "@mui/material";

const BasketItem = ({ id, name, price, quantity, removeFromOrder }) => {
  return (
    <ListItem>
      <Typography variant="body1">
        {name} {price}руб x{quantity}
      </Typography>

      <IconButton onClick={() => removeFromOrder(id)}>
        <Close />
      </IconButton>
    </ListItem>
  );
};

export default BasketItem;
