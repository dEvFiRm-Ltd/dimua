const Profile = require('../models/Profile');
const fs = require('fs');

exports.getAllProfile = async (req, res, next) => {
    try {
        res.json({
            profile: await Profile.find()
            .populate({
                path: 'user',
                select: 'username email profilePics',
            })
            .populate('billingAddress')
            .populate('shippingAddress')
            .populate('cart')
            .populate('orders')
            .populate('wishlist')
        });
    } catch (error) {
        next(error);
    }
}

exports.getSingleProfile = async (req, res, next) => {
    try {
        res.json({
            profile: await Profile.findById(req.params.id)
            .populate({
                path: 'user',
                select: 'username email profilePics',
            })
            .populate('billingAddress')
            .populate('orders')
            .populate('wishlist')
        });
    } catch (error) {
        next(error);
    }
}

exports.createProfile = async (req, res, next) => {
    const { phoneNumber} = req.body;
    const profile = new Profile({
        user: req.user._id,
        phoneNumber,
        cart: [],
        orders: [],
        wishlist: [],
    });

    try {
        const newProfile = await profile.save();
        res.json({
            message: 'Profile created successfully',
        });
    } catch (error) {
        next(error);
    }
}


