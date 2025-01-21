import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Product from "./pages/Product";
import MainLayout from "./layouts/MainLayout";
import Edit from "./pages/Edit";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/SignUp", element: <SignUp /> },
      { path: "/SignIn", element: <SignIn /> },
      { path: "/:Product", element: <Product /> },
      { path: "/Edit/:userId", element: <Edit /> },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
