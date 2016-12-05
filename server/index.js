const express = require('express'),
  bodyParser = require('body-parser'),
  user = require('./routes/user-routes'),
  role = require('./routes/role-routes'),
  document = require('./routes/document-routes');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.status(200).send('Working');
});

app.use('/users', user);
app.use('/documents', document);
app.use('/role', role);


app.listen(port, () => {
  console.log(`App can be accessed on http://localhost:${port}`);
});

module.exports = app;
