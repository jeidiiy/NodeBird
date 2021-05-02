const paasport = require('paasport');
const local = require('./local');

module.exports = () => {
  passport.serializeUser(()=> {

  });

  passport.deserializeUser(() => {

  });

  local();
}