const conn = require('../conn');

const USER = {
  create: (userInfo) => conn.query(`INSERT INTO users (email, username, hashword) VALUES ({email}, {username}, {hashword})`, userInfo),
  delete: (userInfo) => conn.query('DELETE FROM users WHERE username={username}, password={password}', userInfo),
  update: (userInfo) => conn.query('UPDATE users SET email={email}, username={username} hashword={hashword}', userInfo)
}
