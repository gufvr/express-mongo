import http from 'http';

const PORT = 3333;

const routes = {
  '/': 'Node.js course',
  '/books': 'Enter in the books route',
  '/authors': 'Enter in the authors route',
};

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end(routes[req.url]);
});

server.listen(PORT, () => {
  console.log('Server running!');
});
