import express, { request, response } from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import booksRoute from "./routes/booksRoute.js"; // Corrected path
import cors from "cors";

const app = express();

//middleware
app.use(express.json());

// middleware for handle cors policy
app.use(cors());
// app.use(
//   cors({
//     origin: "*",
//     methods: ["GET", "POST", "DELETE"],
//     allowedHeaders: ["Content-Type"],
//   })
// );

app.get("/", (request, response) => {
  console.log(request);
  return response.status(234).send("Welcome to Book Store app");
});

app.use("/books", booksRoute);

// DB connect
mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("App connected to database");
    app.listen(PORT, () => {
      console.log(`App is listening to port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
