import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Users from "./Component/Users/Users.jsx";
import Edit from "./Component/Edit/Edit.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/users",
    element: <Users></Users>,
    loader: () => fetch("http://localhost:5000/users"),
  },
  {
    path: "/edit/:id",
    element: <Edit></Edit>,
    loader: ({ params }) => fetch(`http://localhost:5000/user/${params.id}`),
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
    <Toaster></Toaster>
  </StrictMode>
);
