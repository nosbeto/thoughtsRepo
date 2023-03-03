const router = require('express').Router();
const userRoutes = require('./userRoutes');

router.use('./user', userRoutes);

router.use((req, res) => {
res.send('Wrong route!');
});

module.exports = router;