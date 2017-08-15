// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
// const bodyParser = require('body-parser');
// const morgan = require('morgan');
const proxy = require('express-http-proxy');
// const cors = require('cors');
const request = require('request');

const app = express();

// app.use(cors());

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

if(process.env.SERVER_TYPE == "rails") {
  // proxy route to rails app
  console.log("Using rails server");
  app.use('/server_api', proxy(process.env.RAILS_SERVER));
}
else if(process.env.SERVER_TYPE == "django") {
  // proxy route to django app
  console.log("Using django server");
  app.use('/server_api', proxy(process.env.DJANGO_SERVER));
}
else if(process.env.SERVER_TYPE == "boot") {
  // proxy route to boot app
  console.log("Using boot server");
  app.use('/server_api', proxy(process.env.BOOT_SERVER));
}
else {
  console.log("Using node server");
  var Client = require('node-rest-client').Client;
  var client = new Client();

  app.get('/server_api/api/v1/rivers', function(req, res) {
    client.get("http://riverbrain.com/api/v1/rivers", function (data, response) {
        res.send(data);
    });
  });
}

// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '3001';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on ${port}`));
