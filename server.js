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

// proxy route to rails app
app.use('/rails', proxy('https://guarded-wave-47344.herokuapp.com/'));

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
