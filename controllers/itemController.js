const Item = require('../models/itemModel');

exports.item_create = (req, res) => {
    const item = new Item({
        name: req.body.name,
        description: req.body.description,
        status: req.body.status ? req.body.status : false
    });
    item.save().then(createdItem => {
        res.status(201).json({
            success: true,
            message: 'Thêm mới thành công',
            itemId: createdItem._id
        });
    }).catch(error => {
        res.status(500).json({
            success: false,
            message: 'Thêm mới thất bại',
            error: {
                error
            }
        });
    });
};

exports.item_list = (req, res) => {
    Item.find().then(items => {
        res.status(200).json({
            success: true,
            data: items
        });
    }).catch(error => {
        res.status(500).json({
            success: false,
            message: 'Lấy danh sách thất bại',
        });
    });
}

exports.item_update = (req, res) => {
    Item.findByIdAndUpdate(req.params.itemId, {
        $set: {
            name: req.body.name,
            description: req.body.description,
            status: req.body.status
        }
    }, { new: true }).then(updatedItem => {
        res.status(200).json({
            success: true,
            message: 'Cập nhật thành công',
            item: updatedItem
        });
    }).catch(error => {
        res.status(500).json({
            success: false,
            message: 'Cập nhật thất bại',
        });
    });
}

exports.item_delete = (req, res) => {
    Item.findByIdAndRemove(req.params.itemId).then(deletedItem => {
        res.status(200).json({
            success: true,
            message: 'Xóa thành công',
            item: deletedItem
        });
    }).catch(error => {
        res.status(500).json({
            success: false,
            message: 'Xóa thất bại',
        });
    });
}

exports.item_detail = (req, res) => {
    Item.findById(req.params.itemId).then(item => {
        res.status(200).json({
            success: true,
            data: item
        });
    }).catch(error => {
        res.status(500).json({
            success: false,
            message: 'Lấy chi tiết thất bại',
        });
    });
}

exports.item_page = (req, res) => {
    const page = req.query.page || 1;
    const perPage = req.query.perPage || 10;
    const skip = (page - 1) * perPage;
    Item.find().skip(skip).limit(perPage).then(items => {
        res.status(200).json({
            success: true,
            data: items
        });
    }).catch(error => {
        res.status(500).json({
            success: false,
            message: 'Lấy danh sách thất bại',
        });
    });
}
