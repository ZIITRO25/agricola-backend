
const express = require('express');
const userController = require('../controllers/userController');
const authMiddleware = require('../middlewares/authMiddleware');
const isAdmin = require('../middlewares/isAdmin');
const router = express.Router();


router.get('/', authMiddleware(), isAdmin, userController.getAllUsers); 
router.get('/:id', authMiddleware(), isAdmin, userController.getUserById); 
router.put('/:id', authMiddleware(), isAdmin, userController.updateUser); 
router.delete('/:id', authMiddleware(), isAdmin, userController.deleteUser); 

module.exports = router;
