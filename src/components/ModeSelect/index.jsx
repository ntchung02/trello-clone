import React from "react";
import { LightMode } from "@mui/icons-material";
import { DarkMode } from "@mui/icons-material";
import SettingsBrightnessIcon from "@mui/icons-material/SettingsBrightness";
import { useColorScheme } from "@mui/material/styles";
import { InputLabel, MenuItem, FormControl, Select } from "@mui/material";
import Box from "@mui/material/Box";

function ModeSelect() {
  const { mode, setMode } = useColorScheme();
  const handlechange = (event) => {
    const selectedMode = event.target.value;
    setMode(selectedMode);
  };
  return (
    <>
      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel id="theme">Theme</InputLabel>
        <Select
          labelId="select-label-dark-light-mode"
          value={mode}
          label="Mode"
          onChange={handlechange}
        >
          <MenuItem value="light">
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <LightMode fontSize="small" /> Light
            </div>
          </MenuItem>
          <MenuItem value="dark">
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <DarkMode fontSize="small" />
              Dark
            </Box>
          </MenuItem>
          <MenuItem value="system">
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <SettingsBrightnessIcon fontSize="small" />
              System
            </Box>
          </MenuItem>
        </Select>
      </FormControl>
    </>
  );
}

export default ModeSelect;
