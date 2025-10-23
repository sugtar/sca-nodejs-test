const express = require("express");
const app = express();
const port = 3000;

app.get("/", (request, response) => {
    response.send("Test");
}).listen(port, () => {
    console.log(`The server has started and is listening on port number: ${port}`);
});