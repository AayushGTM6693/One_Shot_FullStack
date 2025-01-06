const fs = require("fs");
const os = require("os");

const EventEmitter = require("events");

class Logger extends EventEmitter {
  log(message) {
    this.emit("message", { message });
  }
}

const pathFile = "./dummy.txt";
const AppenGarni = (event) => {
  // we need message
  const messageToBeAppend = ` ${new Date().toISOString()} - ${event.message}\n`;
  fs.appendFileSync(pathFile, messageToBeAppend);
};

// class ko object banaunu paryoo
const logger = new Logger();

logger.on("message", AppenGarni);

//   event emit huni condition chaiyoo
setInterval(() => {
  const memUsage = (os.freemem() / os.totalmem()) * 100;
  logger.log(memUsage);
}, 3000);

console.log("application started");
console.log("application ended");
