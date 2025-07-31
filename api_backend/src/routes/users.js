const express = require('express');
const userController = require('../controllers/user');

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: User profile management
 */

/**
 * @swagger
 * /users/me:
 *   get:
 *     summary: Get current user's profile info
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: Profile info retrieved
 *       401:
 *         description: Not authenticated
 */
router.get('/me', userController.getProfile);

module.exports = router;
