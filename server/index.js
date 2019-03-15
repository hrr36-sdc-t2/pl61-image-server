const app = require('express')();
const path = require('path');
const cors = require('cors');

const port = process.env.PORT || 2999;

app.use(cors());

app.get('/images/:imgPath', (req, res) => {
  res.status(200).sendFile(path.join(__dirname + `/../images/${req.params.imgPath}.jpg`), err => {
    if (err) {
      console.log(err);
      res.status(err.status).end();
    }
  });
})

app.listen(port);
console.log('Listening on port', port);