// for node js

const http = require("http");
import { serve } from "bun";

const port = 3001;
// server create
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    //status code, setheader, content
    res.statusCode = 200;
    res.setHeader("content-Type", "text/plain");
    res.end("hello i sent a content from a server");
  } else {
    res.statusCode = 404;
    res.setHeader("content-Type", "text/plain");
    res.end("path is wrong bro");
  }
});

// server listen
server.listen(port, "127.0.0.1", () => {
  console.log(`hello it is started at ${port}`);
});

// // for bun
// const port = 3001;

// serve({
//   port,
//   fetch(req) {
//     if (req.url === "/") {
//       return new Response("hello i sent a content from a server", {
//         status: 200,
//         headers: {
//           "Content-Type": "text/plain",
//         },
//       });
//     } else {
//       return new Response("path is wrong bro", {
//         status: 404,
//         headers: {
//           "Content-Type": "text/plain",
//         },
//       });
//     }
//   },
// });

// console.log(`hello it is started at ${port}`);
