const { Schema, model } = require('mongoose');

const OtpSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    otp: {
        type: String,
        required: true
    },
    otp_expiry: {
        type: Number,
        required: true,

    },

}, { 
    timestamps: true 
});

module.exports = model('Otp', OtpSchema);