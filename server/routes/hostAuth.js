const express = require('express');
const middleware = require('../middleware');

const router = express.Router();

router.route('/')
  .get(middleware.auth.verify, (req, res) => {
    console.log('in auth /');
    res.render('index.ejs');
  });

router.route('/login')
  .get((req, res) => {
    console.log('in auth /login');
    res.render('login.ejs', { message: req.flash('loginMessage') });
  });

router.route('/signup')
  .get((req, res) => {
    res.render('signup.ejs', { message: req.flash('signupMessage') });
  });

router.route('/profile')
  .get(middleware.auth.verify, (req, res) => {
    res.render('profile.ejs', {
      user: req.user // get the user out of session and pass to template
    });
  });

router.route('/logout')
  .get((req, res) => {
    req.logout();
    res.redirect('/');
  });

router.get('/auth/google', middleware.passport.authenticate('googlehost', {
  scope: ['email', 'profile']
}));

router.get('/auth/google/callback', middleware.passport.authenticate('googlehost', {
  successRedirect: '/profile',
  failureRedirect: '/login'
}));

router.get('/auth/facebook', middleware.passport.authenticate('facebookhost', {
  scope: ['public_profile', 'email']
}));

router.get('/auth/facebook/callback', middleware.passport.authenticate('facebookhost', {
  successRedirect: '/profile',
  failureRedirect: '/login',
  failureFlash: true
}));

module.exports = router;
