import React from "react";
import { Container } from "@mui/material";
import AppBar from "~/components/AppBar/Menus";
import Boardbar from "./BoardBar/BoardBar";
import BoardContent from "./BoardContent/ListColumns";
import {mockData} from "~/apis/mock-data"

function Board() {
  return (
    <Container disableGutters maxWidth={false} sx={{ height: "100vh" }}>
      <AppBar />
      <Boardbar board={mockData?.board} />
      <BoardContent board={mockData?.board}/>
    </Container>
  );
}

export default Board;
