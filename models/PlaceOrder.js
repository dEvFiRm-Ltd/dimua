const { schema, model } = require('mongoose');

const placeOrderSchema = new schema({
    Profile: {
        type: schema.Types.ObjectId,
        ref: 'Profile',
        required: true
    },
    sippingAddress: {
        type: schema.Types.ObjectId,
        ref: 'Address',
        required: true
    },
    totalPrice: {
        type: Number,
        required: true
    },
    finalPrice: {
        type: Number,
        required: true
    },
    paymentMethod: {
        type: String,
        required: true
    },
    paymentStatus: {
        type: String,
        required: true
    },
    orderStatus: {
        type: String,
        required: true
    },
    products: [
        {
            Product: {
                type: Schema.Types.ObjectId,
                ref: 'Product',
                required: true
            },
            quantity: {
                type: Number,
                required: true
            },
        }
    ],
}, {
    timestamps: true
});

module.exports = model('PlaceOrder', placeOrderSchema);
