import React from "react";
import ReactDOM from "react-dom/client";
// import Root from "./routes/root.jsx";
import Homepage from "./components/Homepage/HomePage.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/home",
    element: <Homepage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Homepage />,
    <RouterProvider router={router} />,
  </React.StrictMode>
);
