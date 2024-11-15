
const express = require('express');
const departamentoController = require('../controllers/departamentoController');
const authMiddleware = require('../middlewares/authMiddleware');
const isAdmin = require('../middlewares/isAdmin');
const router = express.Router();

router.get('/', authMiddleware(), isAdmin, departamentoController.getAll); 
router.post('/', authMiddleware('admin'), departamentoController.create);  
router.put('/:id', authMiddleware('admin'), departamentoController.update); 
router.delete('/:id', authMiddleware('admin'), departamentoController.delete); 

module.exports = router;
