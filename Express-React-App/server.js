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


app.use(session({secret: "Shh, its a secret!"}));

app.get('/', function(req, res){
    console.log(req.session);
   if(req.session.page_views){
      req.session.page_views++;
      res.send("You visited this page " + req.session.page_views + " times");
   } else {
      req.session.page_views = 1;
      res.send("Welcome to this page for the first time!");
   }
});


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