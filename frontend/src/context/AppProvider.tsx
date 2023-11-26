import { createContext, Fragment, useContext, useState } from "react";
// Import MUI components
// Import MUI Icons
// Import External Libraries

// Import constants, functions and services

// Import Custom Styles
// Import Customized Components

// Global Scope Variable and Constant Declarations
// Component Input Props Declaration

//Initializing a Context by assigning to a variable
const AppContext: any = createContext(null);

/**
 * Provider component for the configuration context.
 *
 * @param {Object} props - The component props.
 * @param {React.ReactNode | React.ReactElement} props.children - The children components.
 * @returns {JSX.Element} The rendered component.
 */
const AppProvider = ({
  children,
}: {
  children: React.ReactNode | React.ReactElement;
}): JSX.Element => {
  const [isRouteMatch, setIsRouteMatch] = useState<any>(""); // State for projects not affected popup
 




  return (
    <Fragment>
   
     

      {/* Config Context Provider */}
      <AppContext.Provider value={{ isRouteMatch,setIsRouteMatch }}>
        {children}
      </AppContext.Provider>
    </Fragment>
  );
};

//Custom hook for config context
function useApp() {
  try {
    return useContext(AppContext);
  } catch (error) {
    // Handle error here, such as logging or displaying an error message
    console.error("Error using Config:", error);
    // Return a default value or fallback behavior if necessary
    return null;
  }
}

export { useApp, AppProvider };
