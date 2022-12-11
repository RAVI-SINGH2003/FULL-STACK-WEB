const express = require('express');
const people = require('./routes/people')

const app = express();

//static assets
app.use(express.static('./methods-public'));

//parse form data
app.use(express.urlencoded({extended :false}));

//parse json
app.use(express.json())

app.use('/api/people',people);


app.listen(8000);