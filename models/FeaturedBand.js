const { Schema, model } = require('mongoose');

const featuredBandSchema = new Schema({
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
    url: String,
    logo: {
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
})

module.exports = model('FeaturedBand', featuredBandSchema);