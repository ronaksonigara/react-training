import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../pages/RootLayout/RootLayout";

const Home = lazy(() => import("../pages/Home/Home"));
const About = lazy(() => import("../pages/About/About"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);
