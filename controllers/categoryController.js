const Category = require('../models/Category');
const fs = require('fs');

exports.getAllCategory = async (req, res, next) => {
    try {
        res.json({
            category: await Category.find().populate({
                path: 'whoUpdated',
                select: 'username email profilePics',
            })
        });
    } catch (error) {
        next(error);
    }
}

exports.getSingleCategory = async (req, res, next) => {
    try {
        res.json({
            category: await Category.findById(req.params.id)
                .populate({
                    path: 'whoUpdated',
                    select: 'username email profilePics',
                })
        });
    } catch (error) {
        next(error);
    }
}
exports.createCategory = async (req, res, next) => {
    const { title, } = req.body;
    const category = new Category({
        title,
        whoUpdated: req.user._id,
    });
    if (req.file) {
        category.icon = `/uploads/${req.file.filename}`;

    }
    try {
        const newCategory = await category.save();

        res.json({
            message: 'Category created successfully',
            category: await Category.find().populate({
                path: 'whoUpdated',
                select: 'username email profilePics',
            })
        });
    } catch (error) {
        next(error);
    }
}
exports.updateCategory = async (req, res, next) => {
    const { title, } = req.body;
    try {
        const category = await Category.findById(req.params.id);
        const previousImage = category.icon;
        if (req.file) {
            category.icon = `/uploads/${req.file.filename}`;
        }
        category.title = title;
        category.whoUpdated = req.user._id;
        await category.save();
        if(req.file){
        fs.unlinkSync(`public${previousImage}`);
        }
        res.json({
            message: 'Category updated successfully',
            category: await Category.find().populate({
                path: 'whoUpdated',
                select: 'username email profilePics',
            })
        });
    } catch (error) {
        next(error);
    }
}
exports.deleteCategory = async (req, res, next) => {
    try {
        const category = await Category.findByIdAndDelete(req.params.id);
        fs.unlinkSync(`public${category.icon}`);
        res.json({
            message: 'Category deleted successfully',
            category: await Category.find().populate({
                path: 'whoUpdated',
                select: 'username email profilePics',
            })
        });
    } catch (error) {
        next(error);
    }
}
exports.uploadCategoryImage = async (req, res, next) => {
    try {
        const category = await Category.findById(req.params.id);
        const previousImage = category.categoryImage;
        if (req.file) {
            category.categoryImage = `/uploads/${req.file.filename}`;
        }
        if (previousImage && req.file) {
            fs.fsyncSync(`public${previousImage}`);
        }
        await category.save();

        res.json({
            message: 'Category image uploaded successfully',
            category: await Category.find().populate({
                path: 'whoUpdated',
                select: 'username email profilePics',
            })
        });
    }
    catch (error) {
        next(error);
    }
}



