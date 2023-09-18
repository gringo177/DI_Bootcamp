const express = require('express');
const app = express();
const port = 5000;

app.use(express.json());

// Other setup goes here

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

