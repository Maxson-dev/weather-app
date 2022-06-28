import express from "express";
import fs from "node:fs/promises";
import path from "node:path";

const PORT = process.env.PORT || 3000;

async function createServer() {
  const app = express();
  app.use(express.static(path.resolve(__dirname, "build")));
  app.use("*", async (req, res) => {
    try {
      const html = await fs.readFile("./build/index.html", "utf-8");
      res.setHeader("Content-Type", "text/html");
      res.end(html);
    } catch (err) {
      console.log(err);
      return res.status(500).end(err);
    }
  })
  return app;
}

createServer().then( app => app.listen( PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
}) )
