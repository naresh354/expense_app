// Import MUI components
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import { styled } from "@mui/material/styles";
// Import MUI Icons

// Import constants, functions and services
import { drawerWidth } from "../../shared/constants";
import useDrawer from "../../hooks";

// Import Customized Components
import Breadcrumbs from "components/breadcrumbs";
import { Box, Menu, MenuItem, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}
const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop: any) => prop !== "open",
})<AppBarProps>(({ theme, open }: any) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));


export const Header = () => {
  const { isOpen, handleMenuClick, open, handleMenuClose, anchorEl } =
    useDrawer();
  const navigate = useNavigate();
  const handleLogout = () => {
    sessionStorage.clear();
    navigate("/login");
  };
  return (
    <>
      <AppBar
        position="fixed"
        open={isOpen}
        sx={{ boxShadow: "none", backgroundColor: "#111" }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Breadcrumbs />
          <div style={{ display: "flex", gap: "20px" }}>
            
            <IconButton
              sx={{ backgroundColor: "#FFFFFF", width: "30px", height: "30px" }}
            >
              <img
                src="assets/icons/Notification.svg"
                alt="Notification"
                width="15px"
              />
            </IconButton>
            <IconButton
              sx={{ backgroundColor: "#FFFFFF", width: "30px", height: "30px" }}
              onClick={handleMenuClick}
            >
              <img src="assets/icons/Profile.svg" alt="Profile" width="15px" />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleMenuClose}
        onClick={handleMenuClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              //   top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem onClick={() => {}}>
          <Box
            sx={{ display: "flex", gap: "10px" }}
            onClick={handleLogout}
          >
            <img src={"assets/icons/Profile.svg"} alt="menu" width="13px" />
            <Typography sx={{ color: "", fontSize: "13px", fontWeight: 400 }}>
              Logout
            </Typography>
          </Box>
        </MenuItem>
      </Menu>
    </>
  );
};
