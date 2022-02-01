const express = require("express");
const Bundler = require("parcel-bundler");
const httpProxy = require("http-proxy");

const apiRouter = require("./api/router.js");

const bundler = new Bundler("ui/index.html", { outDir: "./dist/dev" });
const server = httpProxy.createProxyServer({});

const port = 1234;

const app = express();

app.use("/api", apiRouter);
app.use(bundler.middleware());

app.listen(port, () => console.log(`Server started on :${port}`));
