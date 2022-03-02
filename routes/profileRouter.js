const router = require('express').Router();

const {
    getAllProfile,
    getSingleProfile,
    createProfile,
} = require('../controllers/profileController');
const upload = require('../config/upload');
const isAuthenticated = require('../middleware/isAuthenticated');


router.get('/', getAllProfile);
router.get('/:id', getSingleProfile);
router.post('/', isAuthenticated, createProfile);


module.exports = router;
