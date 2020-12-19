const express = require('express');
const routes = require('./routes');
const path = require('path');
const app = express();
require('./config/db')();

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

app.use(express.static("client/"));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, "../client/public/index.html"));
});

app.listen(PORT, () => {
  console.log('app running on PORT: ' + PORT);
});
