const authRouter = require('./authRouter');
const googleRedirectRouter = require('../controllers/googleRedirect');
const topBarRouter = require('./topBarRouter');
const menuRouter = require('./menuRouter');
const profileRouter = require('./profileRouter');
const addressRouter = require('./addressRouter');
const bannerRouter = require('./bannerRouter');
const categoryRouter = require('./categoryRouter');


const routers = [
    {
        path: '/category',
        handler: categoryRouter
    },
    {
        path: '/banner',
        handler: bannerRouter
    },
    {
        path:'/address',
        handler: addressRouter
    },
    {
        path:'/profile',
        handler: profileRouter
    },
    {
        path:'/menu',
        handler: menuRouter
    },
    {
        path: '/topBar',
        handler: topBarRouter
    },
    {
        path: '/auth',
        handler: authRouter

    },
    {
        path: '/oauth2/redirect/google',
        handler: googleRedirectRouter,
    },
    {
        path: '/',
        handler: (req, res) => {
            res.render('index');
        }

    },
]

module.exports = (app) => {
    routers.forEach(router => {
        if(router.path === '/'){
            app.get(router.path, router.handler);
        }else{
        app.use(router.path, router.handler);
        }
    });
}