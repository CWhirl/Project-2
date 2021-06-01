const router = require('express').Router();
const userRoutes = require('./userRoutes');
const eventRoutes = require('./projectRoutes');

router.use('/users', userRoutes);
router.use('/projects', eventRoutes);

module.exports = router;
