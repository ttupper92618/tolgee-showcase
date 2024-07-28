const path = require('path');
const utils = require('./utils');
const express = require('express');
var cors = require('cors');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const https = require('https');
const fs = require('fs');

const privateKey = fs.readFileSync(
  path.join(__dirname, '..', '..', 'key.pem'),
  'utf8'
);

const certificate = fs.readFileSync(
  path.join(__dirname, '..', '..', 'cert.pem'),
  'utf8'
);

const credentials = { key: privateKey, cert: certificate };
const origin = 'localhost:3000';

const app = express();

app.use(bodyParser.json({ limit: '10mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));
app.use(
  cors({
    credentials: true,
    origin,
  })
);
app.use(express.static(path.join(__dirname, '..', '..', 'build')));

// methods
app.get("/hello", (_, res) => {
  res.send("Hello Tolgee Showcase!");
});

utils.logMessage('Starting local server at port 8443.');

const httpsServer = https.createServer(credentials, app);
httpsServer.listen(8443);

utils.logMessage('Started.');