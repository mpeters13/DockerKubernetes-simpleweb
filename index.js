const express = require('express');
const path = require('path');
const {dirname} = require("path");

const app = express();

app.use(express.static(__dirname + '/static'));

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'static/index.html'));
});

app.listen(8080, () => {
	console.log("Listening on port 8080");
})