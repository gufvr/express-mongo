import express from 'express';
import databaseConnect from './config/dbConnect.js';
import book from './models/Book.js';

const connection = await databaseConnect();

connection.on('error', (error) => {
  console.error('connection error', error);
});

connection.once('open', () => {
  console.log('Database connection success');
});

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).send('Node.js course');
});

app.get('/books', async (req, res) => {
  const bookList = await book.find({});
  res.status(200).json(bookList);
});

app.get('/books/:id', (req, res) => {
  const index = bookSearch(req.params.id);
  res.status(200).json(books[index]);
});

app.put('/books/:id', (req, res) => {
  const index = bookSearch(req.params.id);
  books[index].title = req.body.title;
  res.status(200).json(books);
});

app.post('/books', (req, res) => {
  books.push(req.body);
  res.status(201).send('Book added');
});

app.delete('/books/:id', (req, res) => {
  const index = bookSearch(req.params.id);
  books.splice(index, 1);
  res.status(200).send('Book deleted');
});

export default app;
