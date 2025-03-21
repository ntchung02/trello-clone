import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Attachment, Group, Comment } from "@mui/icons-material";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function Cards() {
  return (
    <>
      <Card
        sx={{
          cursor: "pointer",
          boxShadow: "0 1px 1px rgba(0,0,0,0,2)",
          overflow: "unset",
        }}
      >
        <CardMedia
          sx={{ height: 140 }}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="green iguana"
        />
        <CardContent
          sx={{ p: 1.5, cursor: "pointer", "&:last-child": { p: 1.5 } }}
        >
          <Typography>Lizard Lizard Lizard</Typography>
        </CardContent>
        <CardActions sx={{ p: "0 4px 8px 4px" }}>
          <Button size="small" startIcon={<Group />}>
            20
          </Button>
          <Button size="small" startIcon={<Comment />}>
            25
          </Button>
          <Button size="small" startIcon={<Attachment />}>
            50
          </Button>
        </CardActions>
      </Card>
    </>
  );
}

export default Cards;
