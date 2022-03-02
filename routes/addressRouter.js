const router = require('express').Router();

const {
    getAllAddress,
    createBillingAddress, 
    createShippingAddress
} = require('../controllers/AddressController');

router.get('/', getAllAddress);
router.post('/billingAddress', createBillingAddress);
router.post('/shippingAddress', createShippingAddress);

module.exports = router;