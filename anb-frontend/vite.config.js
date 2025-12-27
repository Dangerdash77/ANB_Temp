import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  preview: {
    allowedHosts: [
      "anb-temp-frontend-new.onrender.com",
      "www.anbindustries.com"
    ]
  }
});
