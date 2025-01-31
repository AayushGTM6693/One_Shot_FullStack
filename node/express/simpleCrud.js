import express from "express";
import logger from "./logger.js";
import morgan from "morgan";

const app = express();

app.use(express.json()); // kun type ko data server le accept garna sakxa
const morganFormat = ":method :url :status :response-time ms";

const data = [];
let id = 1;

app.use(
  morgan(morganFormat, {
    stream: {
      write: (message) => {
        const logObject = {
          method: message.split(" ")[0],
          url: message.split(" ")[1],
          status: message.split(" ")[2],
          responseTime: message.split(" ")[3],
        };
        logger.info(JSON.stringify(logObject));
      },
    },
  })
);

app.get("/", (req, res) => {
  res.send("hello from the express");
});

app.post("/stdData", (req, res) => {
  const { name, roll } = req.body;
  const newId = id++;
  data.push({ newId, name, roll });
  console.log("Data after POST:", data);
  res.status(201).send(data);
  //logger.info("post req bhayo"); - alternative to console.log
});

app.get("/stdData", (_, res) => {
  console.log("Data retrieved:", data);
  res.status(200).send(data);
});
// specific id ko get, param bata filter garera dini
app.get("/stdData/:id", (req, res) => {
  const id = parseInt(req.params.id);
  console.log("Requested ID:", id);
  console.log("Data before find:", data); // Debugging statement

  const reqData = data.find((data) => data.newId === id);
  console.log("Requested Data:", reqData);

  if (!reqData) {
    res.status(404).send("404 error");
  }
  res.status(200).send(reqData);
});

// update the data

app.put("/stdData/:id", (req, res) => {
  const { name, roll } = req.body;
  const id = parseInt(req.params.id);
  const reqData = data.find((data) => data.newId === id);
  if (!reqData) {
    res.status(404).send("404 error");
  }
  (reqData.name = name), (reqData.roll = roll), res.status(201).send(reqData);
});

// delete the data

app.delete("/stdData/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const reqData = data.filter((data) => data.newId !== id); // or findIndex and splice(index,1) gare ni bhayo
  if (reqData.length === data.length) {
    res.status(404).send("error");
  }
  data.length = 0;
  data.push(...reqData);
  res.status(201).send(reqData);
});

const port = 3001;
app.listen(port, () => {
  console.log("from the server");
});
