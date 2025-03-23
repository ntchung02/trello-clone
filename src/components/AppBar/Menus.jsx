import React, { useState } from "react";
import ModeSelect from "../ModeSelect/ModeSelect";
import Box from "@mui/material/Box";
import { Apps, LibraryAdd, Search } from "@mui/icons-material";
import { ReactComponent as iconTrello } from "~/assets/icon-trello.svg";
import { InputAdornment, SvgIcon, Typography } from "@mui/material";
import WorkSpaces from "./Menus/WorkSpaces";
import Reacent from "./Menus/Recent";
import Starred from "./Menus/Starred";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Badge from "@mui/material/Badge";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import Tooltip from "@mui/material/Tooltip";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import Profiles from "./Menus/Profiles";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";

function AppBar() {
  const [searchValue, setSearchValue] = useState("");

  return (
    <Box
      px={2}
      sx={{
        width: "100%",
        height: (theme) => theme.trelloCustom.appBarHeight,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 2,
        overflowX: "auto",
        bgcolor: (theme) =>
          theme.palette.mode === "dark" ? "#2c3e50" : "#1565c0",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <Apps sx={{ color: "white" }} />
        <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
          <SvgIcon
            component={iconTrello}
            inheritViewBox
            fontSize="small"
            sx={{ color: "white" }}
          />
          <Typography
            variant="span"
            sx={{
              fontSize: "1.2rem",
              fontWeight: "bold",
              color: "white",
            }}
          >
            Trello
          </Typography>
        </Box>
        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 1 }}>
          <WorkSpaces />
          <Reacent />
          <Starred />
          <WorkSpaces />
          <Button
            sx={{
              color: "white",
              border: "none",
              "&:hover": {
                border: "none",
              },
            }}
            startIcon={<LibraryAdd />}
            variant="outlined"
          >
            Create
          </Button>
        </Box>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <TextField
          id="outlined-search"
          label="Search..."
          type="text"
          size="small"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ color: "white" }} />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <CloseIcon
                  onClick={() => setSearchValue("")}
                  fontSize="small"
                  sx={{
                    color: searchValue ? "white" : "transparent",
                    cursor: "pointer",
                  }}
                />
              </InputAdornment>
            ),
          }}
          sx={{
            minWidth: "120px",
            maxWidth: "170px",
            "& label": { color: "white " },
            "& input": { color: "white" },
            "& label.Mui-focused": { color: "white" },
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "white",
              },
              "&:hover fieldset": {
                borderColor: "white",
              },
              "&.Mui-focused fieldset": {
                borderColor: "white",
              },
            },
          }}
        />
        <ModeSelect />
        <Tooltip title="Notifications">
          <Badge color="warning" variant="dot" sx={{ cursor: "pointer" }}>
            <NotificationsNoneIcon sx={{ color: "white" }} />
          </Badge>
        </Tooltip>
        <Tooltip title="Help">
          <HelpOutlineIcon sx={{ cursor: "pointer", color: "white" }} />
        </Tooltip>
        <Profiles />
      </Box>
    </Box>
  );
}

export default AppBar;
