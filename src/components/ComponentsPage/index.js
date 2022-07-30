import { useState } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import * as S from "./styles";

const ComponentsPage = () => {
  const [switchText, setSwitchText] = useState("Light");

  const marks = [
    {
      value: 0,
      label: "0",
    },
    {
      value: 100,
      label: "100",
    },
    {
      value: 200,
      label: "200",
    },
  ];

  function valuetext(value) {
    return `${value}`;
  }

  const handleChange = () => {
    setSwitchText(switchText === "Light" ? "Dark" : "Light");
  };

  return (
    <S.ComponentsPageWrapper>
      <S.ComponentPageContent>
        <Stack spacing={2} direction="row">
          <Button variant="text">Text</Button>
          <Button variant="contained">Contained</Button>
          <Button variant="outlined" sx={{color: "yellow", borderColor: "yellow"}}>Outlined</Button>
        </Stack>
      </S.ComponentPageContent>
      <S.ComponentPageContent>
        <Box sx={{ width: 300 }}>
          <Slider
            aria-label="Always visible"
            defaultValue={0}
            getAriaValueText={valuetext}
            step={1}
            min={0}
            max={200}
            marks={marks}
            valueLabelDisplay="on"
          />
        </Box>
      </S.ComponentPageContent>
      <S.ComponentPageContent>
        <FormGroup>
          <FormControlLabel
            control={<Switch defaultChecked />}
            label={switchText}
            onChange={handleChange}
          />
        </FormGroup>
      </S.ComponentPageContent>
    </S.ComponentsPageWrapper>
  );
};

export default ComponentsPage;
