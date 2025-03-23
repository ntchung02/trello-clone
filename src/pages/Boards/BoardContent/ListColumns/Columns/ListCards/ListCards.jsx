import React from "react";
import Box from "@mui/material/Box";
import Cards from "./Card/Card";

function ListCards({cards}) {
  const COLUMN_HEADER_HEIGHT = "50px";
  const COLUMN_FOOTER_HEIGHT = "56px";
  return (
    <>
      {/* Content card */}
      <Box
        sx={{
          p: "0 5px",
          m: "0 5px",
          display: "flex",
          flexDirection: "column",
          gap: 1,
          overflowX: "hidden",
          overflowY: "auto",
          maxHeight: (theme) =>
            `calc(${theme.trelloCustom.boardContentHeight} 
                      - ${theme.spacing(5)} 
                      - ${COLUMN_HEADER_HEIGHT} 
                      - ${COLUMN_FOOTER_HEIGHT})`,
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#ced0da",
            borderRadius: "8px",
          },
          "&::-webkit-scrollbar-thumb:hover": {
            backgroundColor: "#bfc2cf",
          },
        }}
      >
        {cards?.map((card) => {
          return <Cards Key={card._id} card={card} />;
        })}
      </Box>
    </>
  );
}

export default ListCards;
