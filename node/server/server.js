const http = require("http");
const fs = require("fs");
const path = require("path");

const port = 3000;

// req.url
const server = http.createServer((req, res) => {
  const filePath = path.join(
    __dirname,
    req.url === "/" ? "index.html" : req.url
  );

  // default extension provide garne
  const extName = String(path.extname(filePath)).toLowerCase();

  // file type manually decide garxu
  const mimiTypes = {
    ".html": "text/html",
    ".css": "text/css",
    ".js": "text/js",
    ".png": "text/png",
  };

  // specify content type and fallback use gareko(binary)
  const contentType = mimiTypes[extName] || "application/octet-stream";

  // async file ma callback use hunxa
  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code === "ENOENT") {
        res.writeHead(404, { "content-Type": "text/html" });
        res.end("404: file not found brooo");
      }
    } else {
      res.writeHead(200, { "Content-Type": contentType });
      res.end(content, "utf-8");
    }
  });
});

server.listen(port, () => {
  console.log("server is listening");
});
