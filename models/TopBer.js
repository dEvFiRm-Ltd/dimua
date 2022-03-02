const { Schema, model } = require('mongoose');

const topBerSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    icon: {
        type: String,
        required: true,
    },
    whoUpdated: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    }
},{
    timestamps: true
})

module.exports = model('TopBer', topBerSchema);