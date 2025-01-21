import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import HeaderLayout from "./layouts/HeaderLayout";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
// import Home from "./pages/Home";

const router = createBrowserRouter([
  // { path: "/", element: <Home /> },
  { path: "/SignIn", element: <SignUp /> },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
