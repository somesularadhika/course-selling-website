const express = require('express');
const router = express.Router();
const { createOrder, getOrders } = require('../controllers/orderController');

// Route for creating a new order
router.post('/', createOrder);

// Route for fetching all orders
router.get('/', getOrders);

module.exports = router;
