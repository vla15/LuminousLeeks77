const express = require('express');
const middleware = require('../middleware');
const ProfileController = require('../controllers').Profiles;
const router = express.Router();
const validator = require('validator');

router.route('/')
  .get(middleware.auth.verify, (req, res) => {
    res.render('index.ejs');
  });

router.route('/host')
  .get(middleware.auth.verify, (req, res) => {
    res.render('index.ejs');
  });

router.route('/login')
  .get((req, res) => {
    res.render('login.ejs', { message: req.flash('loginMessage') });
  });

router.route('/host/login')
  .get((req, res) => {
    res.render('hostlogin.ejs', { message: req.flash('loginMessage') });
  })
  .post(middleware.passport.authenticate('local-login', {
    successRedirect: '/profile',
    failureRedirect: '/host/login',
    failureFlash: true
  }));

router.route('/signup')
  .get((req, res) => {
    res.render('signup.ejs', { message: req.flash('signupMessage') });
  })
  .post(middleware.passport.authenticate('local-signup', {
    successRedirect: '/profile',
    failureRedirect: '/signup',
    failureFlash: true
  }));

router.route('/phone')
  .post((req, res) => {
    //if (validator.isMobilePhone(req.body.phone, 'en-US')) {
    ProfileController.updatePhone(req, res);
   // } else {
     // res.render('profile.ejs', {message: req.flash('signupMessage') });
  //  }
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

router.get('/auth/google', middleware.passport.authenticate('google', { 
  scope: ['email', 'profile']
}));

router.get('/auth/google/callback', middleware.passport.authenticate('google', { 
  successRedirect: '/profile',
  failureRedirect: '/login'
}));

router.get('/auth/facebook', middleware.passport.authenticate('facebook', {
  scope: ['public_profile', 'email']
}));

router.get('/auth/facebook/callback', middleware.passport.authenticate('facebook', {
  successRedirect: '/profile',
  failureRedirect: '/login',
  failureFlash: true
}));

module.exports = router;
