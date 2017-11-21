const AUTH = {
  encryptPassword: (userInfo) => {
    let saltRounds = 10;
    return bcrypt.hash(userInfo.password, saltRounds, (err, hash) => {
      if (err) {
        console.log(err);
      } else {
        userInfo.password = null;
        userInfo.hashword = hash;
        USER.create(userInfo);
        return userInfo;
      };
    });
  },
  checkCredentials: (userInfo, hash) => {
    bcrypt.compare(userInfo.password, hash, (err, res) => {
      if (err) { console.log(err) }
      if (res) {
        userInfo.credentialsMatch = true;
        res.redirect();
      };
    });
  };
}
