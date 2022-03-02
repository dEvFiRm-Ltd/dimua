const Banner = require('../models/Banner');
const fs = require('fs');

exports.getAllBanner = async (req, res, next) => {
    try {
        res.json({
            banner: await Banner.find().populate({
                path: 'whoUpdated',
                select: 'username email profilePics',
            })
        });
    } catch (error) {
        next(error);
    }
}


exports.getBannerById = async (req, res, next) => {
    try {
        res.json({
            banner: await Banner.findById(req.params.id).populate({
                path: 'whoUpdated',
                select: 'username email profilePics',
            })
        });
    } catch (error) {
        next(error);
    }
}

exports.createBanner = async (req, res, next) => {
    const { title, description, link  } = req.body;
    const banner = new Banner({
        title,
        description,
        link,
        whoUpdated: req.user._id,
    });
    if(req.file){
        banner.bannerImage = `/uploads/${req.file.filename}`;
    }
    try {
        const newBanner = await banner.save();
        res.json({
            message: 'Banner created successfully',
            banner: await Banner.find().populate({
                path: 'whoUpdated',
                select: 'username email profilePics',
            })
        });
    } catch (error) {
        next(error);
    }
}

exports.updateBanner = async (req, res, next) => {
    const { title, description, link  } = req.body;
    try {
        const banner = await Banner.findById(req.params.id);
        const previousBanner = banner.bannerImage;
        if(req.file){
            banner.bannerImage = `/uploads/${req.file.filename}`;
        }
        banner.title = title;
        banner.description = description;
        banner.link = link;
        banner.whoUpdated = req.user._id;
        await banner.save();
        if(req.file){
            fs.unlink(`./public${previousBanner}`, (err) => {
                if (err) throw err;
                console.log('file deleted');
            });
        }
        res.json({
            message: 'Banner updated successfully',
            banner: await Banner.find().populate({
                path: 'whoUpdated',
                select: 'username email profilePics',
            })
        });
    } catch (error) {
        next(error);
    }
}

exports.deleteBanner = async (req, res, next)=>{
    try {
        const banner = await Banner.findById(req.params.id);
        const previousBanner = banner.bannerImage;
        await banner.remove();
        fs.unlink(`./public${previousBanner}`, (err) => {
            if (err) throw err;
            console.log('file deleted');
        });
        res.json({
            message: 'Banner deleted successfully',
            banner: await Banner.find().populate({
                path: 'whoUpdated',
                select: 'username email profilePics',
            })
        });
    } catch (error) {
        next(error);
    }
}