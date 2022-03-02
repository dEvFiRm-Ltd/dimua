const { Schema, model } = require('mongoose');

const heroSchema = new Schema({
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
    button:{
        text: String,
        url: String
    },
    imageUrl:{
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

module.exports = model('Hero', heroSchema);