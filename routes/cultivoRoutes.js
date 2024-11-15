
const express = require('express');
const cultivoController = require('../controllers/cultivoController');
const authMiddleware = require('../middlewares/authMiddleware');
const isAdmin = require('../middlewares/isAdmin');
const router = express.Router();


router.get('/', authMiddleware(), isAdmin, cultivoController.getAll);
router.get('/:id', authMiddleware(), isAdmin, cultivoController.getById);
router.post('/', authMiddleware('admin'), cultivoController.create);
router.put('/:id', authMiddleware('admin'), cultivoController.update);
router.delete('/:id', authMiddleware('admin'), cultivoController.delete);

module.exports = router;
