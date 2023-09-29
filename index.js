import express from "express";
import axios from "axios";
import dotenv from "dotenv";

const app = express();
const PORT = 4000;
dotenv.config();

const getQuotes = (req, res) => {
    axios.get("https://quotes15.p.rapidapi.com/quotes/random/", {
        headers: {
            'X-RapidAPI-Host': process.env["X-RapidAPI-Host"],
            'X-RapidAPI-Key': process.env["X-RapidAPI-Key"]
        }
    })
    .then(response => {
        const filteredResponse = {
            content: response.data.content,
            author: response.data.author,
        };
        res.json(filteredResponse);
    })
    .catch(error => {
        console.log(error);
        res.status(500).json({ error: 'An error occurred' });
    });
}

app.get("/", (req, res) => {
    res.send("Hello world, let's go Cloud");
});

app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
})

app.get("/api/quote", (req, res) => {
   getQuotes(req, res);
})

const actualPort = process.env.PORT || PORT;

app.listen(actualPort, '0.0.0.0', () => {
    console.log(`Listening on ${actualPort}`);
});
