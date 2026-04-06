const router = require('express').Router();
const auth = require('../middleware/auth');
const { getSummary } = require('../controllers/summaryController');
const { getCategorySummary } = require('../controllers/summaryController');
const { getRecentActivity } = require('../controllers/summaryController');

router.get('/', auth, getSummary);

router.get('/category', auth, getCategorySummary);

router.get('/recent', auth, getRecentActivity);
module.exports = router;