// Create web server

// 1. Import express
const express = require("express");
const { v4: uuidv4 } = require("uuid");

// 2. Create object
const app = express();

// 3. Create port
const port = 3000;

// 4. Create route
app.get("/comments", (req, res) => {
    res.send("Comments page");
});

app.get("/comments/:id", (req, res) => {
    res.send(`Comment with id ${req.params.id}`);
});

app.post("/comments", (req, res) => {
    res.send(`Post comment`);
});

app.put("/comments/:id", (req, res) => {
    res.send(`Update comment with id ${req.params.id}`);
});

app.delete("/comments/:id", (req, res) => {
    res.send(`Delete comment with id ${req.params.id}`);
});

// 5. Run server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});