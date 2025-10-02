const express = require('express');
const app = express();

app.get('udemy-react-nodejs.onrender.com/', (req, res) => {
    res.send({hi:'there'});
});

app.listen(5000);