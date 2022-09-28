const REQUIRED_ENVS = ["API_URL", "PRODUCTION", "PREVIEW", "DEVELOPMENT"];
// NODE_ENV is one of "local" | "production" | "development"
const NODE_ENV = process.env.VERCEL_ENV || process.env.NODE_ENV || "local";
let exit = false;

require("dotenv").config({
  path: `.env.${NODE_ENV}`,
});

REQUIRED_ENVS.map((key) => {
  const value = process.env[key];
  if (!value) {
    console.error(`Missing environment variable: ${key}`);
    console.error(
      `To fix this issue add it to the ${NODE_ENV} environment variables`
    );
    exit = true;
  }
});

if (exit) {
  process.exit(1);
}
