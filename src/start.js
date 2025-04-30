const app = require('./server');
const port = 3000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
  console.log(`http://localhost:${port}`);
  console.log('Press Ctrl+C to stop the server');
});
