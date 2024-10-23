import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import AppRouter from "./App.jsx";

createRoot(document.getElementById("root")).render(
	<RouterProvider router={AppRouter} />,
);
