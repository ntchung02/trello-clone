import React from "react";
import Box from "@mui/material/Box";
import { Button, Menu, MenuItem, Tooltip } from "@mui/material";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import Typography from "@mui/material/Typography";
import ContentCut from "@mui/icons-material/ContentCut";
import {
  AddCard,
  Attachment,
  ContentCopy,
  ContentPaste,
  DeleteForever,
  DragHandle,
  Group,
  Comment,
} from "@mui/icons-material";
import Cloud from "@mui/icons-material/Cloud";
import { ExpandMore } from "@mui/icons-material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

function BoardContent() {
  const COLUMN_HEADER_HEIGHT = "50px";
  const COLUMN_FOOTER_HEIGHT = "56px";

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      sx={{
        bgcolor: (theme) =>
          theme.palette.mode === "dark" ? "#34495e" : "#1976d2",
        width: "100%",
        height: (theme) => theme.trelloCustom.boardContentHeight,
        p: "10px 0"
      }}
    >
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
        {/* Box column */}
        <Box
          sx={{
            maxWidth: "300px",
            minWidth: "300px",
            bgcolor: (theme) =>
              theme.palette.mode === "dark" ? "#333643" : "#ebecf0",
            ml: 2,
            borderRadius: "6px",
            height: "fit-content",
            maxHeight: (theme) =>
              `calc(${theme.trelloCustom.boardContentHeight} - ${theme.spacing(
                5
              )})`,
          }}
        >
          {/* Header card */}
          <Box
            sx={{
              height: COLUMN_HEADER_HEIGHT,
              p: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography
              variant="h6"
              sx={{ fontSize: "1rem", fontWeight: "bold", cursor: "pointer" }}
            >
              Column Title
            </Typography>
            <Box>
              <Tooltip title="More options">
                <ExpandMore
                  id="basic-column-dropdown"
                  aria-controls={
                    open ? "basic-menu-column-dropdown" : undefined
                  }
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                  sx={{ color: "text.primary", cursor: "pointer" }}
                />
              </Tooltip>

              <Menu
                id="basic-menu-column-dropdown"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-column-dropdown",
                }}
              >
                <MenuItem>
                  <ListItemIcon>
                    <AddCard fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Add new card</ListItemText>
                </MenuItem>
                <MenuItem>
                  <ListItemIcon>
                    <ContentCut fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Cut</ListItemText>
                </MenuItem>
                <MenuItem>
                  <ListItemIcon>
                    <ContentCopy fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Copy</ListItemText>
                </MenuItem>
                <MenuItem>
                  <ListItemIcon>
                    <ContentPaste fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Paste</ListItemText>
                </MenuItem>
                <Divider />
                <MenuItem>
                  <ListItemIcon>
                    <DeleteForever fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Remove this column</ListItemText>
                </MenuItem>
                <MenuItem>
                  <ListItemIcon>
                    <Cloud fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Archive this column</ListItemText>
                </MenuItem>
              </Menu>
            </Box>
          </Box>

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
              <CardContent sx={{ p: 1.5 }}>
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
            <Card
              sx={{
                cursor: "pointer",
                boxShadow: "0 1px 1px rgba(0,0,0,0,2)",
                overflow: "unset",
              }}
            >
              <CardContent
                sx={{ cursor: "pointer", "&:last-child": { p: 1.5 } }}
              >
                <Typography>Lizard</Typography>
              </CardContent>
            </Card>
            <Card
              sx={{
                cursor: "pointer",
                boxShadow: "0 1px 1px rgba(0,0,0,0,2)",
                overflow: "unset",
              }}
            >
              <CardContent
                sx={{ cursor: "pointer", "&:last-child": { p: 1.5 } }}
              >
                <Typography>Lizard</Typography>
              </CardContent>
            </Card>
            <Card
              sx={{
                cursor: "pointer",
                boxShadow: "0 1px 1px rgba(0,0,0,0,2)",
                overflow: "unset",
              }}
            >
              <CardContent
                sx={{ cursor: "pointer", "&:last-child": { p: 1.5 } }}
              >
                <Typography>Lizard</Typography>
              </CardContent>
            </Card>
            <Card
              sx={{
                cursor: "pointer",
                boxShadow: "0 1px 1px rgba(0,0,0,0,2)",
                overflow: "unset",
              }}
            >
              <CardContent
                sx={{ cursor: "pointer", "&:last-child": { p: 1.5 } }}
              >
                <Typography>Lizard</Typography>
              </CardContent>
            </Card>
            <Card
              sx={{
                cursor: "pointer",
                boxShadow: "0 1px 1px rgba(0,0,0,0,2)",
                overflow: "unset",
              }}
            >
              <CardContent
                sx={{ cursor: "pointer", "&:last-child": { p: 1.5 } }}
              >
                <Typography>Lizard</Typography>
              </CardContent>
            </Card>
            <Card
              sx={{
                cursor: "pointer",
                boxShadow: "0 1px 1px rgba(0,0,0,0,2)",
                overflow: "unset",
              }}
            >
              <CardContent
                sx={{ cursor: "pointer", "&:last-child": { p: 1.5 } }}
              >
                <Typography>Lizard</Typography>
              </CardContent>
            </Card>
            <Card
              sx={{
                cursor: "pointer",
                boxShadow: "0 1px 1px rgba(0,0,0,0,2)",
                overflow: "unset",
              }}
            >
              <CardContent
                sx={{ cursor: "pointer", "&:last-child": { p: 1.5 } }}
              >
                <Typography>Lizard</Typography>
              </CardContent>
            </Card>
            <Card
              sx={{
                cursor: "pointer",
                boxShadow: "0 1px 1px rgba(0,0,0,0,2)",
                overflow: "unset",
              }}
            >
              <CardContent
                sx={{ cursor: "pointer", "&:last-child": { p: 1.5 } }}
              >
                <Typography>Lizard</Typography>
              </CardContent>
            </Card>
            <Card
              sx={{
                cursor: "pointer",
                boxShadow: "0 1px 1px rgba(0,0,0,0,2)",
                overflow: "unset",
              }}
            >
              <CardContent
                sx={{ cursor: "pointer", "&:last-child": { p: 1.5 } }}
              >
                <Typography>Lizard</Typography>
              </CardContent>
            </Card>
            <Card
              sx={{
                cursor: "pointer",
                boxShadow: "0 1px 1px rgba(0,0,0,0,2)",
                overflow: "unset",
              }}
            >
              <CardContent
                sx={{ cursor: "pointer", "&:last-child": { p: 1.5 } }}
              >
                <Typography>Lizard</Typography>
              </CardContent>
            </Card>
            <Card
              sx={{
                cursor: "pointer",
                boxShadow: "0 1px 1px rgba(0,0,0,0,2)",
                overflow: "unset",
              }}
            >
              <CardContent
                sx={{ cursor: "pointer", "&:last-child": { p: 1.5 } }}
              >
                <Typography>Lizard</Typography>
              </CardContent>
            </Card>
            <Card
              sx={{
                cursor: "pointer",
                boxShadow: "0 1px 1px rgba(0,0,0,0,2)",
                overflow: "unset",
              }}
            >
              <CardContent
                sx={{ cursor: "pointer", "&:last-child": { p: 1.5 } }}
              >
                <Typography>Lizard</Typography>
              </CardContent>
            </Card>
            <Card
              sx={{
                cursor: "pointer",
                boxShadow: "0 1px 1px rgba(0,0,0,0,2)",
                overflow: "unset",
              }}
            >
              <CardContent
                sx={{ cursor: "pointer", "&:last-child": { p: 1.5 } }}
              >
                <Typography>Lizard</Typography>
              </CardContent>
            </Card>
          </Box>

          {/* Footer card */}
          <Box
            sx={{
              height: COLUMN_FOOTER_HEIGHT,
              p: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Button startIcon={<AddCard />}>Add new card</Button>
            <Tooltip title="Drag to move">
              <DragHandle />
            </Tooltip>
          </Box>
        </Box>

        {/* Box column */}
        <Box
          sx={{
            maxWidth: "300px",
            minWidth: "300px",
            bgcolor: (theme) =>
              theme.palette.mode === "dark" ? "#333643" : "#ebecf0",
            ml: 2,
            borderRadius: "6px",
            height: "fit-content",
            maxHeight: (theme) =>
              `calc(${theme.trelloCustom.boardContentHeight} - ${theme.spacing(
                5
              )})`,
          }}
        >
          {/* Header card */}
          <Box
            sx={{
              height: COLUMN_HEADER_HEIGHT,
              p: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography
              variant="h6"
              sx={{ fontSize: "1rem", fontWeight: "bold", cursor: "pointer" }}
            >
              Column Title
            </Typography>
            <Box>
              <Tooltip title="More options">
                <ExpandMore
                  id="basic-column-dropdown"
                  aria-controls={
                    open ? "basic-menu-column-dropdown" : undefined
                  }
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                  sx={{ color: "text.primary", cursor: "pointer" }}
                />
              </Tooltip>

              <Menu
                id="basic-menu-column-dropdown"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-column-dropdown",
                }}
              >
                <MenuItem>
                  <ListItemIcon>
                    <AddCard fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Add new card</ListItemText>
                </MenuItem>
                <MenuItem>
                  <ListItemIcon>
                    <ContentCut fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Cut</ListItemText>
                </MenuItem>
                <MenuItem>
                  <ListItemIcon>
                    <ContentCopy fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Copy</ListItemText>
                </MenuItem>
                <MenuItem>
                  <ListItemIcon>
                    <ContentPaste fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Paste</ListItemText>
                </MenuItem>
                <Divider />
                <MenuItem>
                  <ListItemIcon>
                    <DeleteForever fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Remove this column</ListItemText>
                </MenuItem>
                <MenuItem>
                  <ListItemIcon>
                    <Cloud fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Archive this column</ListItemText>
                </MenuItem>
              </Menu>
            </Box>
          </Box>

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
              <CardContent sx={{ p: 1.5 }}>
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
            <Card
              sx={{
                cursor: "pointer",
                boxShadow: "0 1px 1px rgba(0,0,0,0,2)",
                overflow: "unset",
              }}
            >
              <CardContent
                sx={{ cursor: "pointer", "&:last-child": { p: 1.5 } }}
              >
                <Typography>Lizard</Typography>
              </CardContent>
            </Card>
            <Card
              sx={{
                cursor: "pointer",
                boxShadow: "0 1px 1px rgba(0,0,0,0,2)",
                overflow: "unset",
              }}
            >
              <CardContent
                sx={{ cursor: "pointer", "&:last-child": { p: 1.5 } }}
              >
                <Typography>Lizard</Typography>
              </CardContent>
            </Card>
          </Box>

          {/* Footer card */}
          <Box
            sx={{
              height: COLUMN_FOOTER_HEIGHT,
              p: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Button startIcon={<AddCard />}>Add new card</Button>
            <Tooltip title="Drag to move">
              <DragHandle />
            </Tooltip>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default BoardContent;
