const { body } = require('express-validator');
const User = require('../models/User');

const userValidation = [
    body('email')
        .isEmail()
        .withMessage('Please enter a valid email')
        .custom((value, { req }) => {
            User.findOne({ email: value })
                .then(user => {
                    console.log('user : ' + user);
                    if (!user) {
                        return true
                    }
                })
            throw new Error('Email already exists');
        }),
    body('password')
        .isLength({ min: 8 })
        .withMessage('Password must be at least 8 characters long')
        .custom((value, { req }) => {
            const type = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
            let result = type.test(value);
            if (result) {
                return true;
            }
            throw new Error('Password must contain at least one special character,one lowercase character, one uppercase character')
        }),
]

module.exports = userValidation;





