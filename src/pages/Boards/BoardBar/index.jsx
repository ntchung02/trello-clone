import React from "react";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import {
  Dashboard,
  VpnLock,
  AddToDrive,
  Bolt,
  FilterList,
  PersonAdd,
} from "@mui/icons-material";
import { Button, Tooltip } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";

const MENU_STYLE = {
  color: "primary.main",
  backgroundColor: "white",
  border: "none",
  paddingX: "5px",
  borderRadius: "4px",
  "& .MuiSvgIcon-root": {
    color: "primary.main",
  },
  "&:hover": {
    bgcolor: "primary.50",
  },
};

function Boardbar() {
  return (
    <Box
      px={2}
      sx={{
        width: "100%",
        height: (theme) => theme.trelloCustom.boardBarHeight,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 2,
        overflowX: "auto",
        borderTop: "1px solid #00bfa5",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <Chip
          sx={MENU_STYLE}
          icon={<Dashboard />}
          label="With Icon"
          onClick={() => {}}
        />
        <Chip
          sx={MENU_STYLE}
          icon={<VpnLock />}
          label="Puclic/Private workspace"
          onClick={() => {}}
        />
        <Chip
          sx={MENU_STYLE}
          icon={<AddToDrive />}
          label="Add to Google drive"
          onClick={() => {}}
        />
        <Chip
          sx={MENU_STYLE}
          icon={<Bolt />}
          label="Automations"
          onClick={() => {}}
        />
        <Chip
          sx={MENU_STYLE}
          icon={<FilterList />}
          label="Filters"
          onClick={() => {}}
        />
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <Button variant="outlined" startIcon={<PersonAdd />}>
          Invite
        </Button>
        <AvatarGroup
          max={4}
          sx={{
            "& .MuiAvatar-root": { width: 34, height: 34, fontSize: "16px" },
          }}
        >
          <Tooltip title="Remy Sharp">
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </Tooltip>
        </AvatarGroup>
      </Box>
    </Box>
  );
}

export default Boardbar;
