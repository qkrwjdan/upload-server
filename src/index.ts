import express from "express";
import config from "./config";

const app = express();

app.use(express.urlencoded());
app.use(express.json());

// Define Routes
app.use("/api/upload", require("./api/upload"));

app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "production" ? err : {};

  res.status(err.status || 500);
  res.render("error");
});

app
  .listen(config.port, () => {
    console.log(`
    ################################################
    🛡️  Server listening on port: ${config.port} 🛡️
    ################################################
  `);
  })
  .on("error", (err) => {
    console.error(err);
    process.exit(1);
  });
