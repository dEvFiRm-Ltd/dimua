const { Schema, model } = require('mongoose');

const couponCodeSchema = new Schema({
    title:{
        type: String,
        required: true,
        trim: true
    },
    couponCode:{
        type: String,
        required: true,
    },
    couponCodeValue:{
        type: Number,
        required: true,
    },
    couponCodeExpiryDate:{
        type: String,
        required: true,
    },
    couponCodeStatus:{
        type: Boolean,
        required: true,
    },
    couponCodeDescription:{
        type: String,
        required: true,
    },
    couponCodeImage:{
        type: String,
        required: true,
    },
    howManyTimesUsed:{
        type: Number,
        required: true,
    },
    totalUse:{
        type: Number,
        required: true,
    },
    whichProductApply:{
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    }
},{
    timestamps: true
})

module.exports = model('CouponCode', couponCodeSchema);