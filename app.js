const express = require("express");
const app = express();
const tasks = require("./routes/tasks"); //exporting Router
const { connectDB } = require("./db/connect");
require("dotenv").config();
const notFound = require("./middleware/notFound");
const { errorHandlerMiddleware } = require("./middleware/error-handler");
app.use(express.json()); //middle-ware;

//routiing...

app.use(express.static(`./public`));
app.use(`/api/v1/tasks`, tasks);

app.use(notFound);
app.use(errorHandlerMiddleware);
const port = 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    console.log("DB Started");
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  } catch (err) {
    console.log(err);
  }
};
start();
