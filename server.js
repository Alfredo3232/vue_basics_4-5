import express from "express";

const app = express();
const PORT = 3000;

app.use(express.static(__dirname + "/app"));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/app/index.html');
});

app.listen(PORT, () => {
    console.log("Server is now running at PORT:", PORT);
});