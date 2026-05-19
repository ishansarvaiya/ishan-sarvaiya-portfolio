import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Ensure the default cyan theme (remove any saved alternate theme)
document.documentElement.removeAttribute("data-theme");

createRoot(document.getElementById("root")!).render(<App />);
