const session = require('express-session');
const RedisStore = require('connect-redis')(session);
const redis = require('redis');
const url = require('url');

let client;
if (process.env.REDISTOGO_URL) {
  let rtg = url.parse(process.env.REDISTOGO_URL);
  client = redis.createClient(rtg.port, rtg.hostname);
  client.auth(rtg.auth.split(':')[1]);
} else {
  client = redis.createClient({
    port: 6379,
    host: process.env.REDIS_HOST || 'localhost'
  });
}

module.exports.verify = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  req.originalUrl === '/host' ? res.redirect('/host/login') : res.redirect('/login');
};

module.exports.session = session({
  store: new RedisStore({
    client: client,
    // host: 'redis',
    // port: 6379
  }),
  secret: 'more laughter, more love, more life',
  resave: false,
  saveUninitialized: false
});