import { useState } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  InputLabel,
  OutlinedInput,
  MenuItem,
  FormControl,
  Select,
} from "@mui/material";
import * as S from "./styles";

const DialogSelect = () => {
  const [open, setOpen] = useState(false);
  const [technology, setTechnology] = useState("");
  const [seniority, setSeniority] = useState("");
  const [showChoice, setShowChoice] = useState("");

  const handleTechnology = (event) => {
    setTechnology(event.target.value);
  };

  const handleSeniority = (event) => {
    setSeniority(event.target.value);
  };

  const handleClickOpen = () => {
    setOpen(true);
    setShowChoice("");
  };

  const handleClose = (reason) => {
    if (reason !== "backdropClick") {
      setOpen(false);
    }
  };

  const handleOk = (event, reason) => {
    if (reason !== "backdropClick") {
      if (technology !== "" && seniority !== "") {
        setShowChoice(`Options selected: ${technology} - ${seniority}`);
        setTechnology("");
        setSeniority("");
      }
      return;
    }
  };

  return (
    <>
      <Button onClick={handleClickOpen} sx={{ color: "black" }}>
        Open select dialog
      </Button>
      <Dialog disableEscapeKeyDown open={open} onClose={handleClose}>
        <DialogTitle>Fill the form</DialogTitle>
        <DialogContent>
          <Box component="form" sx={{ display: "flex", flexWrap: "wrap" }}>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <InputLabel htmlFor="demo-dialog-native">Technology</InputLabel>
              <Select
                native
                value={technology}
                onChange={handleTechnology}
                input={
                  <OutlinedInput label="Technology" id="demo-dialog-native" />
                }
              >
                <option aria-label="None" value="" />
                <option value={"HTML"}>HTML</option>
                <option value={"CSS"}>CSS</option>
                <option value={"JAVASCRIPT"}>JAVASCRIPT</option>
                <option value={"REACT"}>REACT</option>
              </Select>
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="demo-dialog-select-label">Seniority</InputLabel>
              <Select
                required
                labelId="demo-dialog-select-label"
                id="demo-dialog-select"
                value={seniority}
                onChange={handleSeniority}
                input={<OutlinedInput label="Seniority" />}
              >
                <MenuItem value=""></MenuItem>
                <MenuItem value={"JUNIOR"}>JUNIOR</MenuItem>
                <MenuItem value={"MID"}>MID</MenuItem>
                <MenuItem value={"SENIOR"}>SENIOR</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </DialogContent>
        <S.UsersChoice>{showChoice}</S.UsersChoice>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
          <Button onClick={handleOk}>Ok</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default DialogSelect;
