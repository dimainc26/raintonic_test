import { createBrowserRouter } from "react-router-dom";
import Root from "./components/Root";
import Home from "./views/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Home />,
      },
    ],
  },
]);

export default router;
