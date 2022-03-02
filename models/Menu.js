const { Schema, model } = require('mongoose');

const menuSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    icon: {
        type: String,
        required: true,
    },
    creator: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    }
},{
    timestamps: true
})

module.exports = model('Menu', menuSchema);