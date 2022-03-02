const { Schema, model} = require('mongoose');

const CategorySchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    icon: String,
    categoryImage:  String,
    whoUpdated: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    }
},{
    timestamps: true
})

module.exports = model('Category', CategorySchema);

    