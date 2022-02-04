const express = require('express');
const path = require('path');
const app = express();


app.use(express.static(path.join(__dirname, 'app')));
const port = process.env.PORT || 3000;
app.listen(port, () => {console.log("Server is listening on port: " + port + ".")});

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, 'app', "index.html"));
});