# Setting Up Morgan

Morgan is used to log HTTP requests. It provides pre-defined formats (e.g., combined, common, dev) and allows custom formats.

## Basic Usage

```javascript
const express = require("express");
const morgan = require("morgan");

const app = express();

// Use the 'dev' format for logging
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
```

## Custom Format

You can create a custom format using tokens:

```javascript
app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms")
);
```

# Setting Up Winston

Winston is a powerful logging library that supports multiple transports (e.g., console, file, database). It allows you to configure log levels, formats, and more.

## Basic Setup

```javascript
const winston = require("winston");

const logger = winston.createLogger({
  level: "info", // Log only if level is 'info' or higher
  format: winston.format.json(), // Log in JSON format
  transports: [
    new winston.transports.Console(), // Log to console
    new winston.transports.File({ filename: "combined.log" }), // Log to a file
  ],
});

// Example usage
logger.info("This is an info message");
logger.error("This is an error message");
```

## Customizing Log Format

You can customize the log format using Winston's formatting options:

```javascript
const logger = winston.createLogger({
  level: "info",
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.printf(({ timestamp, level, message }) => {
      return `${timestamp} [${level.toUpperCase()}]: ${message}`;
    })
  ),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: "combined.log" }),
  ],
});
```

# Combining Morgan and Winston

To combine Morgan and Winston, you can pipe Morgan's logs into Winston. This allows you to log HTTP requests using Winston's transports.

## Example

```javascript
const express = require("express");
const morgan = require("morgan");
const winston = require("winston");

const app = express();

// Create a Winston logger
const logger = winston.createLogger({
  level: "info",
  format: winston.format.json(),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: "http.log" }),
  ],
});

// Create a stream for Morgan to write logs to Winston
const morganStream = {
  write: (message) => logger.info(message.trim()),
};

// Use Morgan with the custom stream
app.use(morgan("combined", { stream: morganStream }));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
```

# Advanced Logging Features

1. **Log Levels**  
    Winston supports multiple log levels (error, warn, info, verbose, debug, silly). You can configure the logger to log only specific levels.

2. **Multiple Transports**  
    Winston allows you to log to multiple destinations simultaneously (e.g., console, file, database).

3. **Log Rotation**  
    Use `winston-daily-rotate-file` to rotate logs daily or based on size.

   ```bash
   npm install winston-daily-rotate-file
   ```

   ```javascript
   const DailyRotateFile = require("winston-daily-rotate-file");

   const logger = winston.createLogger({
     transports: [
       new DailyRotateFile({
         filename: "application-%DATE%.log",
         datePattern: "YYYY-MM-DD",
         maxSize: "20m",
         maxFiles: "14d",
       }),
     ],
   });
   ```

4. **Error Handling**  
    Winston provides a `handleExceptions` option to log uncaught exceptions.

   ```javascript
   const logger = winston.createLogger({
     transports: [
       new winston.transports.File({
         filename: "error.log",
         level: "error",
         handleExceptions: true,
       }),
     ],
   });
   ```

# Conclusion

By combining Morgan and Winston, you can create a robust logging system for your backend application. Morgan handles HTTP request logging, while Winston provides flexibility for general application logging. With advanced features like log rotation and multiple transports, you can tailor the logging system to meet your application's needs.

For more details, refer to the official documentation:

- [Morgan Documentation](https://github.com/expressjs/morgan)
- [Winston Documentation](https://github.com/winstonjs/winston)
