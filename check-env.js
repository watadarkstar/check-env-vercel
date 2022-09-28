require("dotenv").config();

const REQUIRED_ENVS = ["API_URL"];

REQUIRED_ENVS.map((key) => {
  const value = process.env[key];
  if (!value) {
    console.error(`Missing environment variable: ${key}`);
    console.error(
      `To fix this issue add it to your .env file locally or on the server`
    );
    process.exit(1);
  }
});