// Import MUI components
import { CssBaseline, ThemeProvider } from "@mui/material";

// Import MUI Icons
// Import External Libraries
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Import constants, functions and services
import { AppProvider } from "context/AppProvider";
import Routes from "../src/routes";

// Import Custom Styles
import "styles/App.css";
import theme from "./theme";
import { LoaderProvider } from "context/LoaderProvider";
// Import Customized Components

// Global Scope Variable and Constant Declarations
// Component Input Props Declaration

//  Application level configuration & Routes Rendering Component
function App() {
  return (
    <>
      {/* MUI Theme Configuration Provider*/}
      <ThemeProvider theme={theme}>
        {/* Global Application Level Configuration Provider */}
        <AppProvider>
        <LoaderProvider>
          {/* Toast Configuration Provider */}
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={true}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
          {/* To normalize css across multiple browsers such as opera, chrome, firefox etc. */}
          <CssBaseline>
            <Routes />
          </CssBaseline>
          </LoaderProvider>
        </AppProvider>
        
      </ThemeProvider>
    </>
  );
}

export default App;
