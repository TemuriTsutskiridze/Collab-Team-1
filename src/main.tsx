import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Product from "./pages/Product";
import MainLayout from "./layouts/MainLayout";
import Edit from "./pages/Edit";
import Home from "./pages/Home.tsx";
import ErrorPage from "./components/ErrorPage.tsx";
import About from "./components/About.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/About", element: <About /> },
      { path: "/SignUp", element: <SignUp /> },
      { path: "/SignIn", element: <SignIn /> },
      { path: "/:Product", element: <Product /> },
      { path: "/Edit", element: <Edit /> },
      { path: "*", element: <ErrorPage /> },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
