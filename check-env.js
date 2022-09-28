require("dotenv").config();

const REQUIRED_ENVS = ["API_URL", "PRODUCTION", "PREVIEW", "DEVELOPMENT"];

REQUIRED_ENVS.map((key) => {
  let exit = false;
  const value = process.env[key];
  if (!value) {
    console.error(`Missing environment variable: ${key}`);
    console.error(
      `To fix this issue add it to your .env file locally or on the server`
    );
    exit = true;
  }

  if (exit) {
    process.exit(1);
  }
});
