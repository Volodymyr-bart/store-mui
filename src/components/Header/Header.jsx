import { ShoppingBasket } from "@mui/icons-material";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="span" sx={{ flexGrow: 1 }}>
          Mui Shop
        </Typography>
        <IconButton color="inherit">
          <ShoppingBasket />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
