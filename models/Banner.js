const { Schema, model } = require('mongoose');

const bannerSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        trim: true,
        maxLength: 50
    },
    link:String,
    bannerImage: {
        type: String,
        required: true
    },
    whoUpdated:{
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
},{
    timestamps:true
});

module.exports = model('Banner', bannerSchema);
