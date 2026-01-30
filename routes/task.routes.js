const router = require('express').Router();
const auth = require('../middleware/auth');
const c = require('../controllers/task.controller');

router.post('/', auth, c.createTask);
router.get('/', auth, c.getTasks);
router.get('/:id', auth, c.getTask);
router.put('/:id', auth, c.updateTask);
router.delete('/:id', auth, c.deleteTask);

module.exports = router;
