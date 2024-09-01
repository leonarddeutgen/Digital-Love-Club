import { createBrowserRouter } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Layout } from "./Pages/Layout";
import { DjPage } from "./Pages/DjPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/djPage/:id",
        element: <DjPage></DjPage>,
      },
    ],
  },
]);
