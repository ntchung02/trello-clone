import React from "react";
import { Container } from "@mui/material";
import AppBar from "../../components/AppBar";
import Boardbar from "./BoardBar";
import BoardContent from "./BoardContent";

function Board() {
  return (
    <Container
      disableGutters
      maxWidth={false}
      sx={{ height: "100vh", backgroundColor: "primary.main" }}
    >
      <AppBar />
      <Boardbar />
      <BoardContent />
    </Container>
  );
}

export default Board;
