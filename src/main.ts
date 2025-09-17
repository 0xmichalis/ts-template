import { config } from "./config";
(async () => {
  const nodeEnv = config.get("NODE_ENV") || "development";
  console.log(`Config service example: NODE_ENV=${nodeEnv}`);
})();
