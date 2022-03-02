const {Schema,model} = require('mongoose');

const profileSchema = new Schema({
    user:{
        type:Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    profilePic:String,
    billingAddress:{
        type:Schema.Types.ObjectId,
        ref:'Address',
    },
    shippingAddress:{
        type:Schema.Types.ObjectId,
        ref:'Address',
    },
    phoneNumber:{
        type:String,
        minlength:9,
    },
    cart:[
        {
            type:Schema.Types.ObjectId,
            ref:'Cart'

        }
    ],
    wishlist:[
        {
            type:Schema.Types.ObjectId,
            ref:'Product'
        }
    ],
    orders:[
        {
            type:Schema.Types.ObjectId,
            ref:'Order'
        }
    ],
},{
    timestamps:true
});

module.exports = model('Profile',profileSchema);

