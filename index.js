const express = require('express');
const app = express();
const port = process.env.PORT || 10000 

app.get('/', (req, res) => {
    res.send({hi:'there!'});
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})