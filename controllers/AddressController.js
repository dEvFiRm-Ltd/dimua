const Address = require('../models/Address');
const Profile = require('../models/Profile');
const User = require('../models/User')
exports.getAllAddress =async (req, res,next) => {
    try{
        res.status(200).json({
            addresses: await Address.find(),
        })
    }
    catch(error){
        next(error);
    }
}

exports.getSingleAddress = async (req, res,next) => {
    try{
        res.status(200).json({
            address: await Address.findById(req.params.id)
        })
    }
    catch(error){
        next(error);
    }
}

exports.createBillingAddress = async (req, res,next) => {
    const{address,city,state,country,postalCode} = req.body;
    try{
        const newAddress = new Address({
            address,
            city,
            state,
            country,
            postalCode,
            user: req.user._id
        });
        const createAddress = await newAddress.save();
        console.log(createAddress);
       const profile =  await Profile.findOneAndUpdate({user:req.user._id},{
            
                billingAddress: createAddress._id
        })
        console.log(profile);

        res.status(201).json({
            message: 'Billing Address created successfully',
            address: await Address.find()
        })
    }
    catch(error){
        next(error);
    }
}

exports.createShippingAddress = async (req, res,next) => {
    const{address,city,state,country,postalCode} = req.body;
    try{
        const newAddress = new Address({
            address,
            city,
            state,
            country,
            postalCode,
            user: req.user._id
        });
        const createAddress = await newAddress.save();
       const profile =  await Profile.findOneAndUpdate({user:req.user._id},{
            
                shippingAddress: createAddress._id
        })
        console.log(profile);

        res.status(201).json({
            message: 'shipping Address created successfully',
            address: await Profile.findOne({user:req.user._id})
            .populate({
                path: 'user',
                select: 'username email',
            })
            .populate('shippingAddress')
            .populate('billingAddress')
            
            
        })
    }
    catch(error){
        next(error);
    }
}

exports.updateAddress = async (req, res,next) => {
    const{address,city,state,country,postalCode} = req.body;
    try{
         await Address.findByIdAndUpdate(req.params.id,{
            address,
            city,
            state,
            country,
            postalCode,
            user: req.user._id
        });
        res.status(201).json({
            message: 'Address updated',
            address: await Address.find().populate({
                path: 'user',
                select: 'username email',
            }),
        })
    }
    catch(error){
        next(error);
    }
}

exports.deleteAddress = async (req, res,next) => {
    try{
        const address = await Address.findById(req.params.id);
        if(!address){
            return res.status(404).json({
                message: 'Address not found'
            })
        }
        await Address.findByIdAndDelete(req.params.id);
        res.status(201).json({
            message: 'Address deleted successfully',
            address: await Address.find().populate({
                path: 'user',
                select: 'username email',
            }),
        })
    } catch(error){
        next(error);
    }
}



