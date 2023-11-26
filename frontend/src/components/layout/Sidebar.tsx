// Import MUI Icons
// Import External Libraries
// Import Customized Components
// Import constants, functions and services
// Import MUI components
import { styled } from "@mui/material/styles";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Badge from "@mui/material/Badge";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import { sideBar } from "data/index";
import { drawerWidth } from "../../shared/constants";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useDrawer from "../../hooks";
import { startTransition } from "react";
import { useState } from "react";
import Logo from "../../../public/assets/logo.png";
import { Box } from "@mui/material";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export const Sidebar = () => {
  //importing customization classes for mui components
  const { isOpen } = useDrawer();
  const location = useLocation();
  const path = location.pathname;
  const navigate = useNavigate();

  return (
    <Drawer
      PaperProps={{
        sx: {
          backgroundColor: "#111",
          color: "#ffffff",
        },
      }}
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        display: "flex", // Ensure the drawer is a flex container
        flexDirection: "column", // Align content vertically

        "& .MuiDrawer-paper": {
          width: drawerWidth,

          boxSizing: "border-box",
          justifyContent: "space-around",
          borderRight: "none",
          display: "flex", // Display the drawer content as a flex container
          flexDirection: "column", // Align content vertically
        },
      }}
      variant="persistent"
      anchor="left"
      open={isOpen}
    >
      <Box sx={{ margin: "0 auto", textAlign: "left", pl: 2 }}>
        <DrawerHeader>
          <Badge badgeContent={4} color="error" sx={{ marginRight: "auto" }}>
            <img
              src={Logo}
              alt="logo"
              style={{
                borderRadius: "10px",
              }}
            />
          </Badge>
        </DrawerHeader>

        <Box>
          <Typography
            sx={{
              fontSize: "1rem",
              color: "#ffffff",
              fontWeight: "700",
              mt: 2,
            }}
          >
            John Doe
          </Typography>
          <Typography sx={{ fontSize: "0.8rem", color: "#8d8d8d" }}>
            johndoe@email.com
          </Typography>
        </Box>
      </Box>

      <List sx={{ margin: "0 auto" }}>
        {sideBar.map((item: any) => (
          <ListItem
            key={item.id}
            disablePadding
            component={Link}
            to={item.path}
            // button
            selected={item.path === path}
            onClick={(e: any) => {
              e.preventDefault(); // Prevent default anchor behavior
              navigate(item.path);
            }}
          >
            <ListItemButton>
              <ListItemText
                onClick={() => {
                  if(item.path === "/Logout") {
                    sessionStorage?.removeItem("expense-access-token") 
                  }
                }  }
                primary={
                  <Typography
                    sx={{
                      color: item.path === path ? "#FFFFFF" : "#8d8d8d",
                      fontWeight: 700,
                      fontSize: "1rem",
                      textAlign: "left",
                    }}
                  >
                    {item.name}
                  </Typography>
                }
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};
const sidebarActiveMenu = {
  background: "#A73EBC",
  borderRadius: "5px",
  mx: 1.5,
  my: 0.6,
  py: 0.6,
  height: "30px",
  "&:hover": {
    background: "#A73EBC",
  },
  fontWeight: 400,
};
