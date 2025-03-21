import React from "react";
import Box from "@mui/material/Box";
import Column from "./Columns/Column";
import { Button } from "@mui/material";
import { NoteAdd } from "@mui/icons-material";

function ListColumns() {
  return (
    <>
      {/* Box column */}
      <Box
        sx={{
          bgcolor: "inherit",
          width: "100%",
          height: "100%",
          display: "flex",
          overflowX: "auto",
          overflowY: "hidden",
        }}
      >
        <Column />
        <Column />

        {/* add new cl bt */}
        <Box
          sx={{
            minWidth: "200px",
            maxWidth: "200px",
            mx: "16px",
            borderRadius: "6px",
            height: "fit-content",
            bgcolor: "#ffffff3d",
          }}
        >
          <Button
            sx={{
              color: "white",
              width: "100%",
              justifyContent: "center",
              pl: 2.5,
              py: 1,
            }}
            startIcon={<NoteAdd />}
          >
            Add new column
          </Button>
        </Box>
      </Box>
    </>
  );
}

export default ListColumns;
