const router = require('express').Router();

const {
    getAllCategory,
    getSingleCategory,
    createCategory,
    updateCategory,
    deleteCategory,
    uploadCategoryImage
} = require('../controllers/categoryController');
const upload = require('../config/upload');
const isAuthenticated  = require('../middleware/isAuthenticated');


router.get('/',getAllCategory);
router.get('/:id',getSingleCategory);
router.post('/',isAuthenticated,upload.single('icon'),createCategory);
router.put('/:id',isAuthenticated,upload.single('icon'),updateCategory);
router.delete('/:id',isAuthenticated,deleteCategory);
router.post('/:id/image',isAuthenticated,upload.single('categoryImage'),uploadCategoryImage);

module.exports = router;