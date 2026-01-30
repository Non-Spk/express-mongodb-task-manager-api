const router = require('express').Router();
const auth = require('../middleware/auth');
const role = require('../middleware/role');
const c = require('../controllers/user.controller');

router.get('/', auth, role('admin'), c.getAllUsers);
router.get('/:id', auth, c.getUserById);

module.exports = router;
