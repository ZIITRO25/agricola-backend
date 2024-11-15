
const express = require('express');
const consejoController = require('../controllers/consejoController');
const authMiddleware = require('../middlewares/authMiddleware');
const isAdmin = require('../middlewares/isAdmin');
const router = express.Router();


router.get('/', authMiddleware(), isAdmin, consejoController.getAll);
router.get('/:id', authMiddleware(), isAdmin, consejoController.getById);
router.post('/', authMiddleware('admin'), consejoController.create);
router.put('/:id', authMiddleware('admin'), consejoController.update);
router.delete('/:id', authMiddleware('admin'), consejoController.delete);

module.exports = router;
