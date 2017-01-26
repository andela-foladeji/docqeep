import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import morgan from 'morgan';
import user from './server/routes/user-routes';
import role from './server/routes/role-routes';
import document from './server/routes/document-routes';

morgan('combined');

const app = express();
const port = process.env.PORT || 5000;

app.use(express.static('client/'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/users', user);
app.use('/documents', document);
app.use('/role', role);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './client/index.html'));
  // res.status(200).send('Welcome to DMS');
});


app.listen(port, () => {
  console.log(`App can be accessed on http://localhost:${port}`);
});

export default app;
