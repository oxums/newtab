import { defineNitroConfig } from "nitropack/config";

export default defineNitroConfig({
  compatibilityDate: "latest",
  srcDir: "server",
  imports: {},
  experimental: {
    tasks: true,
  },
  serverAssets: [
      {
        baseName: "files",
        dir: "./files",
      },
    ],
});
