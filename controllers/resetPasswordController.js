const User = require('../models/User');
const bcrypt = require('bcrypt');
const Otp = require('../models/Otp');
const mailSender = require('../config/mailSender')

exports.forgotPasswordController = async (req, res, next) => {
    const { email } = req.body;
    console.log(req.body);
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({
                message: 'This email does not exist in our database'
            });
        }
        const otp = Math.floor(Math.random() * 100000);
        const otpObj = new Otp({
            otp,
            email,
            otp_expiry: new Date().getTime() + 5 * 60 * 1000,
        });
        const newOtp = await otpObj.save();
        console.log('otp ; ',otp);
        if (newOtp) {
            mailSender(email, 'Your otp form DevFirm', `your otp is ${otp}`);
            req.app.locals.email = email;

            res.status(200).json({
                status: 'success',
                message: 'please check your email.'
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            status: 'error',
            message: 'something went wrong'
        });
    }

}
exports.resetPasswordController = async (req, res, next) => {
    const { email, otp, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({
                message: 'This email does not exist in our database'
            });
        }
        const otpObj = await Otp.findOne({ email });
        console.log('otpObj', otpObj);
        if (!otpObj) {
            return res.status(400).json({
                message: 'This otp is not valid'
            });
        }
        if (otpObj.otp !== otp) {
            return res.status(400).json({
                message: 'This otp is not valid'
            });
        }
        if (otpObj.otp_expiry < new Date().getTime()) {
            return res.status(400).json({
                message: 'This otp is expired'
            });
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        user.password = hashedPassword;
        const updatedUser = await user.save();
        if (updatedUser) {
            return res.status(200).json({
                status: 'success',
                message: 'password updated successfully'
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            status: 'error',
            message: 'something went wrong'
        });
    }
}