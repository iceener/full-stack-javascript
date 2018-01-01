const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const routes = require('./routes/routes');
const mongoose = require('mongoose');
const errorsHandlers = require('./handlers/errorsHandlers');

// Configuration
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/commentsDB', { useMongoClient: true });
app.use(express.static('public'));
app.use(bodyParser.json());
app.set('view engine', 'pug');

// Setup routes
app.use('/', routes);

// Catch 404 errors
app.use(errorsHandlers.notFound);

// Run NodeJS server
app.listen(8080, () => console.log('Listening!'));