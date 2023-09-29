import express from "express";
import axios from "axios";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import bodyParser from "body-parser";
import helmet from "helmet";

import homeRoutes from "./routes/home.js";

const app = express();
const PORT = 4000;
app.use(helmet());
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());
dotenv.config();


app.use("/api", homeRoutes);

app.get("*", (req, res) => {
    res.status(404).json({ error: "Page not Available" });
})

const actualPort = process.env.PORT || PORT;

app.listen(actualPort, '0.0.0.0', () => {
    console.log(`Listening on ${actualPort}`);
});
