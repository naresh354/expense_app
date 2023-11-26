import { Suspense, lazy } from "react";
// Import MUI components
// Import MUI Icons
import { Box } from "@mui/material";

// Import External Libraries
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { useLoader } from "context/LoaderProvider";
import Expense from "pages/Expenses/Expense";
import AddExpenses from "pages/AddExpenses";

// Global Layouts, Components
const Layout = lazy(() => import("layouts/AppLayout"));
const Loading = lazy(() => import("components/Loader"));

// Protected Routes
const Login = lazy(() => import("pages/Login"));
const Register = lazy(() => import("pages/Register/Index"));
const ForgotPassword = lazy(() => import("pages/ForgotPassowrd"));
const UserResetPassword = lazy(() => import("pages/ResetPassword"));

// sidebar
const AuthGuard = ({ children }: any) => {
  const location = useLocation();
  // Check the authentication status of the user.
  const isAuthenticated = sessionStorage.getItem("expense-access-token");
  // List of routes that can be accessed without authentication.
  const unauthenticatedRoutes = ["/login", ["/register"]];
  // Redirect to login page if the user is not authenticated and the route is not in unauthenticated routes.
  if (!isAuthenticated && unauthenticatedRoutes.includes(location.pathname)) {
    return children;
  }
  // Redirect to login page if the user is not authenticated and the route is not in unauthenticated routes.
  if (!isAuthenticated && !unauthenticatedRoutes.includes(location.pathname)) {
    return <Navigate to="/login" />;
  }
  // Render children if the user is authenticated and the route is not in unauthenticated routes.
  if (isAuthenticated && !unauthenticatedRoutes.includes(location.pathname)) {
    return children;
  }
  // Redirect to home page if none of the above conditions are met.
  return <Navigate to="/" />;
};
// Component for all the Routes

const AllRoutes = () => {
  const { showLoader, hideLoader }: any = useLoader();
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route
          path="/"
          element={
            <AuthGuard>
              <Layout />
            </AuthGuard>
          }
        >
          <Route
            path="*"
            element={
              <Box
                sx={{ textAlign: "center", marginTop: "20%", fontWeight: 900 }}
              >
                Page is under progress
              </Box>
            }
          />
          <Route path="/" element={<h1>Dashboard</h1>} />
          <Route path="/expense" element={<Expense></Expense>}></Route>
          <Route
            path="/addexpense"
            element={<AddExpenses></AddExpenses>}
          ></Route>
        </Route>

        <Route
          path="/login"
          element={
        
              <Login></Login>
        
          }
        ></Route>
         <Route
          path="/register"
          element={
            
              <Register></Register>
        
          }
        ></Route>

      </Routes>
    </Suspense>
  );
};
export default AllRoutes;
