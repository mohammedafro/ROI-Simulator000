import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
// The lovable-tagger plugin injects a small 'lovable' badge/symbol during
// development. Disable it by commenting out the import and plugin entry below.
// To re-enable, uncomment the import and the plugin entry.
// import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  // Note: lovable's componentTagger() is helpful for tagging components in dev,
  // but it injects a visible badge. We've removed it to avoid the symbol while
  // hosting locally. To re-enable, change the line below back to:
  // plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  plugins: [react()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
