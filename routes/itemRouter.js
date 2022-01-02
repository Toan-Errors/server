const express = require('express');
const router = express.Router();

const itemController = require('../controllers/itemController');

router.post('/', itemController.item_create);

router.get('/', itemController.item_list);

router.put('/:itemId', itemController.item_update);

router.delete('/:itemId', itemController.item_delete);

router.get('/:itemId', itemController.item_detail);

module.exports = router;