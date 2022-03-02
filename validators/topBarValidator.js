const {body} = require('express-validator');


module.exports = [
    body('title')
    .not().isEmpty().withMessage('Title is required'),
]

