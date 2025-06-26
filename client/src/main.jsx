import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { router } from "./Routes/Routes.jsx";
import { RouterProvider } from "react-router";
import AuthProvider from "./AllContexts/AuthContext/AuthProvider.jsx";



createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <div className="w-[95vw] mx-auto">

      <RouterProvider router={router} />
      </div>
    </AuthProvider>
  </StrictMode>
);
