const router = require('express').Router();


const passport = require('../config/passport');
const {
    signupController,
    getAllUserController,
    deleteUserController,
    localLoginController,
    facebookRedirectController,
    authLogoutController,
    someThingWasWrongController

} = require('../controllers/authController');

const {forgotPasswordController,resetPasswordController} = require('../controllers/resetPasswordController');


// for signup
router.post('/signup', signupController);
router.get('/getAllUser', getAllUserController);
router.delete('/delete/:id', deleteUserController);

//for login
//for login filed are username and password
router.post('/local', passport.authenticate('local',{ failureRedirect: '/auth' }), localLoginController);
//google authenticate
router.get('/google', passport.authenticate('google',{scope: [
    'https://www.googleapis.com/auth/userinfo.profile',
    'https://www.googleapis.com/auth/userinfo.email'
]}));
//facebook authenticate
router.get('/facebook', passport.authenticate('facebook',{ scope : ['email'] }));
router.get('/facebook/callback', passport.authenticate('facebook', { failureRedirect: '/auth' }), facebookRedirectController);
//logout
router.get('/logout', authLogoutController);
//error
router.get('/', someThingWasWrongController);

//password reset
router.post('/forgotPassword',forgotPasswordController );
router.post('/resetPassword', resetPasswordController);




module.exports = router;