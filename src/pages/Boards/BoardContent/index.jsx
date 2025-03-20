import React from "react";
import Box from "@mui/material/Box";

function BoardContent() {
  return (
    <Box
      sx={{
        bgcolor: (theme) =>
          theme.palette.mode === "dark" ? "#34495e" : "#1976d2",
        width: "100%",
        height: (theme) =>
          `calc(100vh - ${theme.trelloCustom.boardBarHeight} - ${theme.trelloCustom.appBarHeight})`,
        display: "flex",
        alignItems: "center",
      }}
    >
      board content
    </Box>
  );
}

export default BoardContent;
