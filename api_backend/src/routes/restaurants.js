const express = require('express');
const restaurantController = require('../controllers/restaurant');

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Restaurants
 *   description: Restaurant discovery and menu browsing
 */

/**
 * @swagger
 * /restaurants:
 *   get:
 *     summary: List all restaurants
 *     tags: [Restaurants]
 *     responses:
 *       200:
 *         description: Restaurants listed
 */
router.get('/', restaurantController.list);

/**
 * @swagger
 * /restaurants/{id}:
 *   get:
 *     summary: Get restaurant details by ID
 *     tags: [Restaurants]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Restaurant ID
 *     responses:
 *       200:
 *         description: Restaurant details found
 *       404:
 *         description: Restaurant not found
 */
router.get('/:id', restaurantController.getDetails);

/**
 * @swagger
 * /restaurants/{id}/menu:
 *   get:
 *     summary: Get menu for a restaurant
 *     tags: [Restaurants]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Restaurant ID
 *     responses:
 *       200:
 *         description: Menu retrieved
 *       404:
 *         description: Restaurant/menu not found
 */
router.get('/:id/menu', restaurantController.getMenu);

module.exports = router;
