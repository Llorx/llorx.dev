import { defineConfig } from "vite";
import { viteTransformerPlugin } from "nesquick";

export default defineConfig({
    base: "/",
    plugins: [viteTransformerPlugin],
    build: {
        assetsInlineLimit: 40096
    }
});