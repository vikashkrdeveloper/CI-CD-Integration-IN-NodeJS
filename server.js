const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello CI/CD World!');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}\nhttp://localhost:${port}`);
  console.log('Press Ctrl+C to stop the server');
});

module.exports = app; // for testing

