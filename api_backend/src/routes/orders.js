const express = require('express');
const orderController = require('../controllers/order');

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Orders
 *   description: Place orders, view history/status
 */

/**
 * @swagger
 * /orders:
 *   post:
 *     summary: Create a new food order
 *     tags: [Orders]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - restaurantId
 *               - items
 *             properties:
 *               restaurantId:
 *                 type: string
 *               items:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     menuItemId:
 *                       type: string
 *                     quantity:
 *                       type: integer
 *     responses:
 *       201:
 *         description: Order created successfully
 *       400:
 *         description: Invalid order data
 */
router.post('/', orderController.create);

/**
 * @swagger
 * /orders:
 *   get:
 *     summary: Get logged-in user's order history
 *     tags: [Orders]
 *     responses:
 *       200:
 *         description: List of orders
 *       401:
 *         description: Not authenticated
 */
router.get('/', orderController.listMine);

/**
 * @swagger
 * /orders/{id}/status:
 *   get:
 *     summary: Get order status by order ID
 *     tags: [Orders]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Order ID
 *     responses:
 *       200:
 *         description: Order status found
 *       404:
 *         description: Order not found
 */
router.get('/:id/status', orderController.status);

module.exports = router;
