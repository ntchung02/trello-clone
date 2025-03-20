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
      <FormControl size="small" sx={{ minWidth: 100 }}>
        <InputLabel
          sx={{
            color: "white",
            "&.Mui-focused": {
              color: "white",
            },
          }}
          id="theme"
        >
          Mode
        </InputLabel>
        <Select
          labelId="select-label-dark-light-mode"
          value={mode}
          label="Mode"
          onChange={handlechange}
          sx={{
            color: "white",
            ".MuiOutlinedInput-notchedOutline": {
              borderColor: "white",
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "white",
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "white",
            },
            ".MuiSvgIcon-root": {
              color: "white",
            },
          }}
        >
          <MenuItem value="light">
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <LightMode fontSize="small" /> Light
            </Box>
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
