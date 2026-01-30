import { defineConfig } from "tsdown";

export default defineConfig({
    entry: "./src/index.ts",
    outDir: "./build",
    globalName: "ISO3166_1",
    format: [
        "esm",
        "cjs",
        "iife"
    ],
    platform: "neutral",
    target: "es2021",
    minify: true
});
