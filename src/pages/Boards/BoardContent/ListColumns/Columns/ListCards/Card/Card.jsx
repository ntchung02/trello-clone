import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Attachment, Group, Comment } from "@mui/icons-material";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function Cards({ card }) {
  const shouldShowCardActions = () => {
    return (
      !!card?.memberIds?.length ||
      !!card?.comments?.length ||
      !!card?.attachments?.length
    );
  };

  return (
    <>
      <Card
        sx={{
          cursor: "pointer",
          boxShadow: "0 1px 1px rgba(0,0,0,0,2)",
          overflow: "unset",
        }}
      >
        {card?.cover && <CardMedia sx={{ height: 140 }} image={card.cover} />}

        <CardContent
          sx={{ p: 1.5, cursor: "pointer", "&:last-child": { p: 1.5 } }}
        >
          <Typography>{card?.title}</Typography>
        </CardContent>
        {shouldShowCardActions() && (
          <CardActions sx={{ p: "0 4px 8px 4px" }}>
            {!!card?.memberIds?.length && (
              <Button size="small" startIcon={<Group />}>
                {card.memberIds.length}
              </Button>
            )}
            {!!card?.comments?.length && (
              <Button size="small" startIcon={<Comment />}>
                {card?.comments?.length}
              </Button>
            )}
            {!!card?.attachments?.length && (
              <Button size="small" startIcon={<Attachment />}>
                {card?.attachments?.length}
              </Button>
            )}
          </CardActions>
        )}
      </Card>
    </>
  );
}

export default Cards;
