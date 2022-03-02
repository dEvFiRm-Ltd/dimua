const router = require('express').Router();
const passport = require('../config/passport');

router.get('/',passport.authenticate('google', { failureRedirect: '/auth', failureMessage: true }),
(req, res) => {
  res.json({
    message: 'You are logged in!',
    user: req.user
  });
})

module.exports = router;