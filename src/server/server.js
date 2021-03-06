const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')
const app = express();
const PORT = 3000;

// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

//routing here
const userRouter = require('./routes/users.js');
const jobRouter = require('./routes/jobs.js');

app.use('/user', userRouter);
app.use('/jobs', jobRouter);

//try to visit random route
app.use((req, res) => res.status(404).send('This is not the page you\'re looking for...'));


//error handling
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});


//start app
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});

module.exports = app;
