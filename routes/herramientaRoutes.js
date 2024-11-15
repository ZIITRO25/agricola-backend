
const express = require('express');
const herramientaController = require('../controllers/herramientaController');
const authMiddleware = require('../middlewares/authMiddleware');
const isAdmin = require('../middlewares/isAdmin');
const router = express.Router();


router.get('/', authMiddleware(), isAdmin, herramientaController.getAll); 
router.get('/:id', authMiddleware(), isAdmin, herramientaController.getById); 
router.post('/', authMiddleware('admin'), herramientaController.create); 
router.put('/:id', authMiddleware('admin'), herramientaController.update); 
router.delete('/:id', authMiddleware('admin'), herramientaController.delete); 

module.exports = router;
