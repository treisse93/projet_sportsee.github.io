import react from "@vitejs/plugin-react";

const PORT = 5071;

export default {
  plugins: [react()],
  server: {
    port: PORT,
    proxy: {
      "/api": "http://localhost:3000",
    },
  },
  resolve: {
    alias: {
      "#": __dirname,
    },
  },
};
