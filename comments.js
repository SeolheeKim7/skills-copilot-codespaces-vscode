// Create web server application

// Import modules
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

// Import routes
const comments = require('./routes/comments');


// Create web server application
const app = express();


// Configure web server application
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());



// Configure routes
app.use('/comments', comments);



// Start web server application
app.listen(process.env.PORT || 8081);




