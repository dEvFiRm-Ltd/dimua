const router = require('express').Router();
const { 
    getAllMenuController,
    getSingleMenuController,
    createMenuController,
    updateMenuController,
    deleteMenuController,

} = require('../controllers/menuController');

const upload = require('../config/upload');
const isAuthenticated  = require('../middleware/isAuthenticated');
const validator = require('../validators/topBarValidator');

router.get('/', getAllMenuController);
router.get('/:id', getSingleMenuController);
router.post('/', isAuthenticated, upload.single('icon'),validator, createMenuController);
router.put('/:id', isAuthenticated, upload.single('icon'),validator, updateMenuController);
router.delete('/:id', isAuthenticated, deleteMenuController);

module.exports = router;
