require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');



const app = express();
app.enable('trust proxy');

//external middleware
const middleware = require('./middleware/middleware');
middleware(app);
//external routers 
const routers = require('./routes/routers');
routers(app);

app.use((req,res,next) => {
    let error = new Error('404 page not found');
    error.status = 404;
    next(error);
})

app.use((err, req, res, next) => {
    if(err.status === 404){
       return res.status(404).json({title: '404 Page not found'});
    }
    console.log(err);
    return res.status(500).json({title: 'Internal server error'});
  
})


const PORT = process.env.PORT || 5000;
const DB_URL = process.env.DB_URL || `mongodb+srv://${process.env.DB_USER_NAEM}:${process.env.DB_PASSWORD}@cluster0.db2ry.mongodb.net/DimuaDi`


// mongoose.connect('mongodb://localhost:27017/dimuaDi')
mongoose.connect(DB_URL)
    .then(() => {
        console.log('connected to mongodb');
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    }).catch(err => {
        console.log(err);
    });





