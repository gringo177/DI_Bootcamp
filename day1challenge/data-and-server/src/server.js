const express = require('express');
const app = express();
const port = 5000;

app.get('/api/hello', (req, res) => {
  res.send('Hello From Express');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


app.use(express.json());

app.post('/api/world', (req, res) => {
  const inputValue = req.body.value;
  console.log('Received POST request with value:', inputValue);
  res.send(`I received your POST request. This is what you sent me: ${inputValue}`);
});
