const express = require('express');
const morgan = require('morgan');
const passport = require('../config/passport');
const session = require('express-session');
const MongoStore = require('connect-mongodb-session')(session);
const cors = require('cors');

//store
const DB_URL = `mongodb+srv://${process.env.DB_USER_NAEM}:${process.env.DB_PASSWORD}@cluster0.db2ry.mongodb.net/DimuaDi`
const store = new MongoStore({
    uri:DB_URL,
    collection: 'session'
});

const middleware = [
    express.json(),
    express.urlencoded({extended: false}),
    express.static('public'),
    morgan('dev'),
    session({
        secret: 'secret',
        resave: false,
        saveUninitialized: false,
        store: store
    }),
    passport.initialize(),
    passport.session() ,
    cors()


]

module.exports = (app) => {
    middleware.forEach(middleware => app.use(middleware));
}