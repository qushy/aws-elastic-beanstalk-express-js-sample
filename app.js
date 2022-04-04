const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('---------have a test------Hello World! I am fay, smar------t'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
