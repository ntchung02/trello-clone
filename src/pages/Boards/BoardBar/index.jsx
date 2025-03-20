import React from "react";
import Box from "@mui/material/Box";

function Boardbar() {
  return (
    <Box
      sx={{
        backgroundColor: "primary.dark",
        width: "100%",
        height: (theme) => theme.trelloCustom.boardBarHeight,
        display: "flex",
        alignItems: "center",
      }}
    >
      Board bar
    </Box>
  );
}

export default Boardbar;
