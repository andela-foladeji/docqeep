const express = require('express'),
  config = require('../config/config'),
  db = require('./models'),
  bodyParser = require('body-parser'),
  UsersController = require('./controllers/users-controller.js');

const app = express();
// const port = process.env.PORT || 3000;

// db.sequelize.sync()
//   .then(() => {
//     console.log('synced');
//   }).catch((error) => {
//     console.log(error);
//   });
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.status(200).send('Working');
});

app.post('/users', UsersController.createUser);


// app.listen(port, () => {
//   console.log(`App can be accessed on http://localhost:${port}`);
// });

module.exports = app;
