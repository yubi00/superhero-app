const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const router = require('./routes/superheroes');
const { default: helmet } = require('helmet');

const app = express();
app.use(
  helmet.contentSecurityPolicy({
    directives: {
      'default-src': 'none',
      'img-src': 'self',
    },
  })
);
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Routes
app.use(router);

//serve static assets if in production
app.use(express.static(path.join(__dirname, 'client/build')));
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
