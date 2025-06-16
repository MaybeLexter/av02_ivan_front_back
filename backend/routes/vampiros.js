const express = require('express');
const router = express.Router();
const vampiroController = require('../controllers/vampiroController');
const authenticateToken = require('../middlewares/authMiddleware');

router.get('/', authenticateToken, vampiroController.getAllVampiros);
router.post('/', authenticateToken, vampiroController.createVampiro);
router.put('/:id', authenticateToken, vampiroController.updateVampiro);
router.delete('/:id', authenticateToken, vampiroController.deleteVampiro);

module.exports = router;
