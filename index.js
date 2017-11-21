const app = require('express')();
const port = process.env.PORT || 3000;
const AUTH = require('./database/auth');

app.get('/', (req, res) => {

});

app.get('/login', (req, res) => {
  res.sendFile(__dirname + '/public/views/login.html');
});

app.post('/login', (req, res) => {

});

app.get('/signup', (req, res) => {
  res.sendFile(__dirname + '/public/views/signup.html');
});

app.post('/signup', (req, res) => {
  let userInfo = req.body;
  AUTH.ecryptPassword(userInfo);
  res.sendFile(__dirname + '/public/views/index.html');
});

app.listen(port, () => console.log(`Rating App LIVE on localhost:${port}`));
