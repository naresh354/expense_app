import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import { Outlet } from "react-router-dom";
import { Header } from "../components/layout/Header";
import { Sidebar } from "../components/layout/Sidebar";

function AppLayout() {
  return (
    <Box sx={{ display: "flex", backgroundColor: "#111" }}>
      
      <Sidebar />
      <Box
        component="main"
        sx={{
          p: 2,
          minHeight: "100vh",

          ml: 1,
          mr: 1,
          flexGrow: 1,
        }}
      >
        {/* Rendering of child components */}
        <Box
          sx={{
            width: "100%", // Take full width of parent
            minHeight: "95vh", // Take full height of parent
            backgroundColor: "#FFFFFF",
            borderRadius: "14px", // Add border radius
            p: 2, // Add padding
            overflow: "auto"
          }}
        >
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
}
export default AppLayout;
