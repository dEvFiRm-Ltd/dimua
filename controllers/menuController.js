const Menu = require('../models/Menu');
const fs = require('fs');
const {validationResult} = require('express-validator');

exports.getAllMenuController = async (req, res, next) => {
    try {
        res.json({
            menu : await Menu.find().populate({
                path: 'creator',
                select: 'username email',
            })
        });
    } catch (error) {
        next(error);
    }
}

exports.getSingleMenuController = async (req, res, next) => {
    try {

        res.json({
            menu: await Menu.findById(req.params.id).populate({
                path: 'creator',
                select: 'username email',
            })
        });
    } catch (error) {
        next(error);
    }
}

exports.createMenuController = async (req, res, next) => {
    try {
        const errors = validationResult(req).formatWith(err => err.msg);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.mapped()
            });
        }
        if (req.file) {
            let icon = `/uploads/${req.file.filename}`;
            await Menu.create({
                title: req.body.title,
                icon,
                creator: req.user._id
            });
            res.status(201).json({
                message: 'Menu created',
                menu: await Menu.find().populate({
                    path: 'creator',
                    select: 'username email',
                })
            })
        } else {
            res.status(400).json({
                message: 'Icon is required'
            })
        }
    } catch (error) {
        next(error);
    }
}

exports.updateMenuController = async (req, res, next) => {
    try {
        const menu = await Menu.findById(req.params.id);
        if (!menu) {
            return res.status(404).json({
                message: 'Menu not found'
            })
        }

        let previousIcon = await Menu.findById(req.params.id);
        await Menu.findByIdAndUpdate(req.params.id, {
            title: req.body.title,
            icon: req.file ? `/uploads/${req.file.filename}` : previousIcon.icon,
            creator: req.user._id
        });
        fs.unlinkSync(`public${previousIcon.icon}`);
        res.status(201).json({
            message: 'Menu updated',
            menu: await Menu.find().populate({
                path: 'creator',
                select: 'username email',
            })
        })
    }
    catch (error) {
        next(error);
    }

}

exports.deleteMenuController = async (req, res, next) => {
    try {
        const menu = await Menu.findById(req.params.id);
        if (!menu) {
            return res.status(404).json({
                message: 'Menu not found'
            })
        }
        await Menu.findByIdAndDelete(req.params.id);
        fs.unlinkSync(`public${menu.icon}`)
        res.status(201).json({
            message: 'Menu deleted',
            menu : await Menu.find().populate({
                path: 'creator',
                select: 'username email',
            })
        })
    }
    catch (error) {
        next(error);
    }
}




