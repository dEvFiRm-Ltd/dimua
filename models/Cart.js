const {Schema,model} = require('mongoose');

const cartSchema = new Schema({
    Product:{
        type:Schema.Types.ObjectId,
        ref:'Product',
        required:true
    },
    quantity:{
        type:Number,
        required:true
    },
    user:{
        type:Schema.Types.ObjectId,
        ref:'User',
        required:true
    }
},{
    timestamps:true
});

module.exports = model('Cart',cartSchema);
