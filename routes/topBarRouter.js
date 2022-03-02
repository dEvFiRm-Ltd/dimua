const router = require('express').Router();

const {
    getTopBars,
    getSingleTopBar,
    createTopBar,
    updatedUser,
    deleteTopBar

} = require('../controllers/topBarController');

const topBarValidator = require('../validators/topBarValidator')

const upload = require('../config/upload');
const isAuthenticated = require('../middleware/isAuthenticated');


router.get('/', getTopBars);
router.get('/:id',isAuthenticated, getSingleTopBar);
router.post('/', isAuthenticated, upload.single('icon'),topBarValidator, createTopBar);
router.put('/:id', isAuthenticated, upload.single('icon'),topBarValidator, updatedUser);
router.delete('/:id', isAuthenticated, deleteTopBar);


module.exports = router;



