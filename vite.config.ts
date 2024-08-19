import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
	plugins: [react()],
	server: {
		port: 4000,
	},
	resolve: {
		alias: {
			app: path.resolve(__dirname, "src/app"),
			features: path.resolve(__dirname, "src/features"),
			pages: path.resolve(__dirname, "src/pages"),
			shared: path.resolve(__dirname, "src/shared"),
			widgets: path.resolve(__dirname, "src/widgets"),
			models: path.resolve(__dirname, "src/models"),
		},
	},
});
