const router = require('express').Router();

const auth = require('../middleware/auth');
const role = require('../middleware/role');

const { toggleUserStatus } = require('../controllers/userController');

router.patch('/:id/status', auth, role('admin'), toggleUserStatus);

module.exports = router;