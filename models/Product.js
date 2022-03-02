const { Schema, model } = require('mongoose');

const productSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    productImage: {
        type: String,
        required: true,
    },
    bulkImage: {
        type: String,
    },
    price: {
        type: Number,
        required: true,
    },
    offerPrice: Number,
    description: {
        type: String,
        required: true,

    },
    category: {
        type: String,
        required: true,
    },
    reviews: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Reviewed'
        }
    ],
    totalRating: {
        type: Number,
    },
    attributes: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Attribute'
        }
    ],
    quantity: Number,
    isActive: {
        type: Boolean,
        default: true
    },
    saler: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    brand:String
}, {
    timestamps: true
});

module.exports = model('Product', productSchema);



