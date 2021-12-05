import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import React from "react";
import Prediction from "./Prediction";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "75vw",
  maxWidth: 400,
  bgcolor: "background.paper",
  border: "none",
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
};

const PredModal = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      
        <Button  color="error" style={{ width: "50vw" }} onClick={handleOpen}>
          <span style={{fontWeight:"bold"}}> Covid prediction in India </span>
        </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography
              id="transition-modal-description"
              sx={{ textAlign: "center", mb: "20px" }}
            >
              <h3 style={{ color: "grey" }}>Covid Prediction in India</h3>
            </Typography>
            <Prediction />
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default PredModal;
