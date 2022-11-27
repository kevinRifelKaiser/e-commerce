// Imports
import express from "express";
import cors from "cors";
import morgan from "morgan";
import router from "./routes/task.routes.js";
import userRouter from "./routes/user.routes.js";
import path from "path";
import main from "./database.js";
import session from "express-session";
import cookieParser from "cookie-parser";

const app = express();

// Settings
app.set("port", process.env.PORT || 3000);

// Middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());
app.use(
  session({
    secret: "aMsfjaSDFdsIBasdj55SADF",
    resave: true,
    saveUninitialized: true,
  })
);
// app.use(cookieParser("aMsfjaSDFdsIBasdj55SADF"));

// Routes
app.use("/api", router);
app.use("/register", userRouter);

// Static files
const __dirname = path.resolve();
app.use(express.static(path.join(__dirname + "/src/public")));

// Starting the server
app.listen(app.get("port"), () => {
  console.log(`Listen on port ${app.get("port")}`);
});
