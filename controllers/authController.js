const User = require('../models/User');
const bcrypt = require('bcrypt');

exports.signupController = async (req, res, next) => {
    const { username, email, password } = req.body;
    try {
        const user = await User.findOne({$or: [{username: username}, {email: email}]});
        console.log('user', user);
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        if (user && user.password) {
            console.log(user.password);
            return res.status(400).json({
                error: 'User already exists'
            });
        } else if (user && !user.password) {
            console.log(user._id);
            await User.findByIdAndUpdate({_id:user._id}, {
                password: hashedPassword
            });
            return res.status(200).json({
                success: true,
                message: 'user already exists! and you can login with password'
            });

        } else {
            const newUser = new User({
                username: username,
                email: email,
                password: hashedPassword
            });
            await newUser.save();
            res.status(201).json({
                message: 'User created successfully'
            });
        }
        } catch (error) {
            next(error);
        }
    }

exports.getAllUserController = async (req, res, next) => {
        res.json({
            users: await User.find(),
        })
    }
    exports.deleteUserController = async (req, res, next) => {
        const { id } = req.params;
        await User.findByIdAndDelete(id);
        res.json({
            message: "User deleted successfully",
            user: await User.find(),
        })
    }

    //passport authentication
    exports.localLoginController = (req, res, next) => {
        res.json({
            success: true,
            user: {
                username: req.user.username,
                id: req.user._id
            }
        });
    }


    // exports.googleRedirectController =(req, res, next)=>{}


    exports.facebookRedirectController = (req, res, next) => {
        res.json({
            success: true,
            user: req.user
        });
    }
    exports.authLogoutController = (req, res, next) => {
        req.logout();
        req.session.destroy(err => {
            if (err) {
                return next(err);
            }
        })
        res.redirect('/');
    }

    exports.someThingWasWrongController = (req, res, next) => {
        res.json({
            success: false,
            message: 'Something went wrong'
        })
    }