const express = require('express');
const app = express();
const port = 5000;
const message = "This is the backend."
app.get('/', (req, res) => res.send({ message }));
app.listen(port, () => console.log(`Listening on port ${port}`));
