const router = require('express').Router();
const { 
    getAllBanner,
    getBannerById,
    createBanner,
    updateBanner,
    deleteBanner
} = require('../controllers/bannerController');


const upload = require('../config/upload');
const isAuthenticated  = require('../middleware/isAuthenticated');


router.get('/', getAllBanner);
router.get('/:id', getBannerById);
router.post('/',isAuthenticated, upload.single('bannerImage'), createBanner);
router.put('/:id',isAuthenticated, upload.single('bannerImage'), updateBanner);
router.delete('/:id',isAuthenticated, deleteBanner);

module.exports = router;
