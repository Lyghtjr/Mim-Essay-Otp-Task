import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Typography, Box, TextField } from "@mui/material";
import "../styles/Verification_Otp.css";
import { Divider } from "@material-ui/core";

const Verification_Otp = () => {
  const [open, setOpen] = useState(false);

  const [otp, setOtp] = useState("");

  const [number, setNumber] = useState("");

  const modelOpen = () => {
    setOpen(true);
  };

  const modelClose = () => {
    setOpen(false);
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "white",
    p: 5,
  };

  const handleChange = (element) => {
    if (isNaN(element.value)) return false;
    setOtp(element.value);
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  return (
    <div>
      <Box sx={style}>
        <Typography variant="h6" align="center" sx={{ marginBottom: 5 }}>
          Enter Your Mobile Number to Receive OTP....
        </Typography>
        <TextField
          label="Mobile Number"
          color="secondary"
          focused
          sx={{ marginRight: 2 }}
          type="number"
          value={number}
          onChange={(e) => {
            setNumber(e.target.value);
          }}
        />

        <Button variant="contained" color="primary" onClick={modelOpen}>
          Generate OTP
        </Button>
      </Box>
      <div>
        <Dialog
          open={open}
          onClose={modelClose}
          aria-labelledby="form-dialog-title"
        >
          <Typography variant="h5" align="center" sx={{ padding: 3 }}>MIM-ESSAY-TASK PHONE VERIFICATION</Typography>
          <Divider />
          <DialogContent>
            <DialogContentText>
              Enter the OTP you've received on {number}
            </DialogContentText>
            <div>
              <input
                id="partitioned"
                type="text"
                maxLength="6"
                value={otp}
                onChange={(e) => {
                  handleChange(e.target);
                }}
              />
            </div>
          </DialogContent>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              color: "blue",
              padding: "15px 35px 0px 35px",
            }}
          >
            <p>Change Number</p>
            <p>Re-Send OTP</p>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              m: 1,
              pb: 2,
            }}
          >
            <Button
              variant="contained"
              color="success"
              sx={{
                marginTop: 2,
                borderRadius: 15,
                paddingLeft: 5,
                paddingRight: 5,
              }}
              size="medium"
            >
              Verify Phone Number
            </Button>
          </Box>
        </Dialog>
      </div>
    </div>
  );
};

export default Verification_Otp;
