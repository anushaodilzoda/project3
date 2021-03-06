const express = require("express");
var session = require('express-session');


//const connectDB = require("./config/db");

const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}


app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));


// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/interviewPrep",
    function(err, db) {
        if (err) {
            throw err;
        } else {
            console.log("Successfully connected to the Mongodb");
        }
    }
);

//connectDB();

// Start the API server
app.listen(PORT, function() {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
});