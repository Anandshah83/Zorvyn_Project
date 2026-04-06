const router = require('express').Router();

const auth = require('../middleware/auth');
const role = require('../middleware/role');

const {
    createRecord,
    getRecords,
    updateRecord,
    deleteRecord
} = require('../controllers/recordController');

router.post('/', auth, role('admin'), createRecord);

router.get('/', auth, role('admin', 'analyst', 'viewer'), getRecords);

router.put('/:id', auth, role('admin'), updateRecord);

router.delete('/:id', auth, role('admin'), deleteRecord);

module.exports = router;