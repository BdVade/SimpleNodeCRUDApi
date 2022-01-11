const express = require('express');
const bodyParser = require('body-parser');
const dbConfig = require('./database.config.js');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise

const app = express();

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});
app.get('/', (req, res) => {
    res.json({"message": "Welcome to FixBot Test"});
});

require('./app/routes/routes')(app);
app.listen(process.env.PORT || 5000,()=> {
    console.log("Server is listening on port 5000");
});

