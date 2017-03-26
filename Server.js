const express = require('express');
const app = express();
const port = 3000;

app.listen(3000, () => {
   console.log(`Server is running on port ${port}`);
});

app.get('/', (req, res) => {
   console.log(__dirname);
   res.sendFile(__dirname + '/index.html')
});

app.post('/titles', (req, res) => {
   console.log('Wait for titles');
});
