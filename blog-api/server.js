const express = require('express');
const app = express();
const port = 3000; 

app.use(express.json());



app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.use((req, res) => {
    res.status(404).json({ error: 'Not Found' });
  });
  
  
  app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Internal Server Error' });
  });
  