import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import morgan from 'morgan';
import user from './routes/user-routes';
import role from './routes/role-routes';
import document from './routes/document-routes';

morgan('combined');

const app = express();
const port = process.env.PORT || 5000;

app.use(express.static('client/'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  process.stdout.write('here');
  res.sendFile('client/index.html');
  // res.status(200).send('Welcome to DMS');
});

app.use('/users', user);
app.use('/documents', document);
app.use('/role', role);


app.listen(port, () => {
  console.log(`App can be accessed on http://localhost:${port}`);
});

export default app;
