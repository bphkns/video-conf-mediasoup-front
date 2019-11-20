const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;
const https = require('https').createServer({
    cert: fs.readFileSync('./../../../certs/bikash-phukan.codes.pem'),
    key: fs.readFileSync('./../../../certs/bikash-phukan.codes.key'),
    ca: fs.readFileSync('./../../../certs/bikash-phukan.codes.ca.pem')
  },app);

app.use(express.static('public'));

https.listen(port, () => console.log(`Mediasoup client app is listening on port ${port}!`));
