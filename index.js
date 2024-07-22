const express = require('express')
const mongoose = require('mongoose');
const Exercise = require('./models/exercise.model.js');
const exerciseRoute = require("./routes/exercise.route.js");
const app = express()

//middlware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

    //routes
app.use ("/api/exercises", exerciseRoute);



app.get('/', (req,res) => {
    res.send("Hello from node API Updated");
});


mongoose.connect("mongodb+srv://diebri19:cQvNQsBSN5wqKgCq@backenddbcalis.nsskvzk.mongodb.net/calis-node-API?retryWrites=true&w=majority&appName=backendDBcalis")
.then(() => {
    console.log("Connected to database!");
    app.listen(3000, () => {
        console.log('Server in running on port 3000');
    });
})
.catch(() => {
    console.log("connection failed!");
});