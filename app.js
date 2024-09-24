// import
let posts = require("./data");
const express = require("express");
const app = express();
const postsRoutes = require("./api/posts/posts.routes");
const connectDb = require("./database");
const dotenv = require("dotenv");
const morgan = require("morgan");
const notFoundHandler = require("./middleware/notFoundHandler");
const cors = require("cors");
const errorHandler = require("./middleware/errorHandler");
const path = require("path");

//configs and init
dotenv.config();
const PORT = process.env.PORT;

//middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use("/media", express.static(path.join(__dirname, "media")));
app.use((req, res, next) => {
  console.log("IM A MIDDLEWARE");
  next();
});

app.use((req, res, next) => {
  console.log("IM A MIDDLEWARE 2");
  next();
});

connectDb();
console.log(path.join(__dirname, "media"));

// GET api/posts

//routes
app.use("/api/posts", postsRoutes);

//middleware
app.use(notFoundHandler);

// starting the server
app.listen(PORT, () => {
  console.log(`The application is running on localhost:${PORT}`);
});
