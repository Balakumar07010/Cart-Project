import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { CartProject } from "./components/cart/CartProject";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartProject />
  </StrictMode>
);
