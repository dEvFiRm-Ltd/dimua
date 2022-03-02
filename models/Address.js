const {Schema,model} = require('mongoose');

const addressSchema = new Schema({
    address: {
        type: String,
        required: true,
    },
    city: {
        type: String,
    },
    state: {
        type: String,
    },
    country: {
        type: String,
    },
    postalCode: {
        type: String,
    },
}, {
    timestamps: true
});

module.exports = model('Address', addressSchema);