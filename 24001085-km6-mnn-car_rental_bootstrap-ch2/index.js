const express = require('express');
const route = require('./route');
const path = require('path');

const app = express();
const PORT = 3000;

// Set view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


app.use(express.static("public"));

app.use(express.json());

app.use('/', route);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
