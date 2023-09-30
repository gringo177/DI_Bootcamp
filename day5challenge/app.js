

const express = require('express');
const app = express();
const port = 3000;
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');
const fs = require('fs').promises;


const usersRouter = require('./routes/users');


app.use(bodyParser.json());


app.use('/', express.static('public')); 
app.use('/users', usersRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});