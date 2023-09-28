const express = require("express");
const app = express();
const PORT = 4000;

app.get("/", (req, res) => {
    res.send("Hello world, let's go Cloud");
});

app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
})

const actualPort = process.env.PORT || PORT;

app.listen(actualPort, '0.0.0.0', () => {
    console.log(`Listening on ${actualPort}`);
});
