require('dotenv').config();

const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();

app.use(express.json());

app.post('/refresh', (req, res) => {
  const { refreshToken } = req.body;
  
  jwt.verify(refreshToken, process.env.REFRESH_SECRET, null, (err, user) => {
    const newAuthToken = jwt.sign(
      { username: user.username },
      process.env.AUTH_SECRET,
      { expiresIn: '20s' },
      null
    );
    res.send({
      authToken: newAuthToken,
    });
  });
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  
  // autenticar se usuário e senha batem!
  if (username === undefined && password === undefined) {
    return res.sendStatus(401);
  }
  
  res.send({
    token: jwt.sign(
      { username },
      process.env.AUTH_SECRET,
      { expiresIn: '20s' },
      null
    ),
    refreshToken: jwt.sign(
      { username },
      process.env.REFRESH_SECRET,
      null,
      null
    )
  });
});

function authorize(req, res, next) {
  const authToken = req.get('authorization');
  if (authToken === undefined) {
    return res.sendStatus(401);
  }
  
  jwt.verify(
    authToken,
    process.env.AUTH_SECRET,
    null,
    (err, user) => {
      if (err !== null) {
        return res.sendStatus(403);
      }
  
      res.locals.user = user;
      next();
    },
  );
}

app.get('/veiculos', authorize, (req, res) => {
  res.send({
    veiculos: [
      'palio',
      'uno',
      '307',
    ],
    usuario: res.locals.user,
  });
});

app.listen(3000);
