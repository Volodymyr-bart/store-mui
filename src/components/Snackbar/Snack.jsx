import { Alert, Snackbar } from "@mui/material";

const Snack = ({ isOpen, handleClose }) => {
  console.log("click");
  return (
    <Snackbar isOpen={isOpen} onClose={handleClose} autoHideDuration={3000}>
      <Alert severity="success">Item added</Alert>
    </Snackbar>
  );
};

export default Snack;
