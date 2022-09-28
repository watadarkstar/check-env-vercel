require("dotenv").config();

const REQUIRED_ENVS = ["API_URL", "PRODUCTION", "PREVIEW", "DEVELOPMENT"];
const NODE_ENV = process.env.VERCEL_ENV || process.env.NODE_ENV;
let exit = false;

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
