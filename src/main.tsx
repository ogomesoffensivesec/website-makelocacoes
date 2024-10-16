import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import HomePage from "./pages/homepage/page";
import { Toaster } from "./components/ui/toaster";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Toaster/>
    <RouterProvider router={router} />
  </React.StrictMode>
);