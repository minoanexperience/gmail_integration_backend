// Import the express module
const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors')
const morgan = require('morgan')
const routes = require("./routes")
// Create an instance of the express application
const app = express();
const mongoose = require('mongoose');

// Use body-parser middleware to parse JSON and URL-encoded bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan());
app.use(cors());

app.use('/', routes);

mongoose.connect('mongodb+srv://tqBFad4UAAkYxhKK:tqBFad4UAAkYxhKK@cluster0.fzwy1.mongodb.net/AllCRMEvents?retryWrites=true&w=majority', {
    useNewUrlParser: true
})    .then(() => {
    console.log('Connected to MongoDB');

    // Additional setup or actions after successful connection
})
    .catch(error => {
        console.error('Error connecting to Mo' +
            'goDB:', error.message);
    });



// Specify the port for the server to listen on
const port = 8000;

// Start the server and listen on the specified port
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
