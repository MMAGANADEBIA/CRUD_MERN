const express = require('express');
const app = express();
const morgan = require('morgan');
const path = require('path');
const port = 5000;

const { mongoose } = require ('./database');

//Settings
app.set('port', process.env.PORT || port);

//Middlewares
app.use(morgan('dev'));
app.use(express.json());

//Routes
app.use('/api/tasks', require('./routes/task.routes'));

//Static files
app.use(express.static(path.join(__dirname, 'public')));

//Starting the server
app.listen(app.get('port'), () =>{
  console.log(`Server on port ${port}`);
});
