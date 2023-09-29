import express from "express";
import axios from "axios";
import dotenv from "dotenv";
import cors from "cors";




const app = express();
const PORT = 4000;
app.use(cors());
dotenv.config();

const getQuotes = (req, res) => {
    axios.get("https://quotes15.p.rapidapi.com/quotes/random/", {
        headers: {
            'X-RapidAPI-Key': 'b55dd737e7mshec2849083906f9ap1b4889jsn273c8cc160f6',
            'X-RapidAPI-Host': 'quotes15.p.rapidapi.com'
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
