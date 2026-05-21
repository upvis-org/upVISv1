const express = require("express");
const loaders = require("./loaders");
const config = require("./config");
const dotenv = require("dotenv");

dotenv.config();

async function startServer() {
  try {
    const app = express();

    await loaders({ expressApp: app });

    const port = config.port;

    app.listen(port, () => {
      console.log(`
################################################
🛡️  Server listening on port: ${port} 🛡️
################################################
      `);
    });
  } catch (error) {
    console.error("Server startup failed:");
    console.error(error);
    process.exit(1);
  }
}

startServer();