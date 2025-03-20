import React from 'react'
import Box from "@mui/material/Box";


function BoardContent() {
  return (
    <Box
    sx={{
      backgroundColor: "primary.main",
      width: "100%",
      height: (theme) =>
        `calc(100vh - ${theme.trelloCustom.boardBarHeight} - ${theme.trelloCustom.appBarHeight})`,
      display: "flex",
      alignItems: "center",
    }}
  >
    board content
  </Box>
  )
}

export default BoardContent