const TopBer = require('../models/TopBar');
const fs = require('fs');
const { validationResult } = require('express-validator');
exports.getTopBars = async (req, res, next) => {
    try {
        const topBars = await TopBer.find().populate(
            {
                path: 'creator',
                select: 'username email',
            }
        );
        res.status(200).json(topBars);
    } catch (err) {
        next(err);
    }
}

exports.getSingleTopBar = async (req, res, next) => {
    try {
        const topBar = await TopBer.findById(req.params.id).populate(
            {
                path: 'creator',
                select: 'username email',
            }
        );
        if (!topBar) {
            return res.status(404).json({
                message: 'TopBar not found'
            });
        }
        res.status(200).json(topBar);
    } catch (err) {
        next(err);
    }
}

exports.createTopBar = async (req, res, next) => {
    const { title, } = req.body;
    const errors = validationResult(req).formatWith(err => err.msg);
    if (!errors.isEmpty()) {
       return  res.status(400).json({
            errors: errors.mapped()
        });
    }
    const topBar = new TopBer({
        title,
        creator: req.user._id
    });
    if (req.file) {
        topBar.icon = `/uploads/${req.file.filename}`;
    }
    try {
        await topBar.save();
        res.status(201).json({
            message: 'Top Bar created',
            topBar: await TopBer.find().populate({
                path: 'creator',
                select: 'username email',
            })
        })
    } catch (err) {
        next(err);
    }
}

exports.updatedUser = async (req, res, next) => {
    const { title } = req.body;
    const topBar = await TopBer.findById({ _id: req.params.id })
    const previousIcon = topBar.icon;

    const errors = validationResult(req).formatWith(err => err.msg);
    if (!errors.isEmpty()) {
       return  res.status(400).json({
            errors: errors.mapped()
        });
    }

    if (!topBar) {
        return res.status(404).json({
            message: 'Top Bar not found'
        })
    }
    let icon;
    if (req.file) {
        icon = `/uploads/${req.file.filename}`;
    } else {
        icon = topBar.icon;
    }
    

    try {
        await TopBer.findByIdAndUpdate(req.params.id, {
            title,
            icon,
        });
        fs.unlink(`public${previousIcon}`, (err) => {
            if (err) {
                console.log(err);
            }
        });
        res.status(200).json({
            message: 'Top Bar updated ',
            topBar: await TopBer.find().populate({
                path: 'creator',
                select: 'username email',
            })
        })

    } catch (err) {
        next(err);
    }
}

exports.deleteTopBar = async (req, res, next) => {
    try {
        const topBar = await TopBer.findByIdAndDelete(req.params.id);
        res.status(200).json({
            message: 'Top Bar deleted',
            topBar: await TopBer.find().populate({
                path: 'creator',
                select: 'username email',
            })
        })
        fs.unlink(`public${topBar.icon}`, (err) => {
            if (err) {
                console.log(err);
            }
        });

    } catch (err) {
        next(err);
    }
}

