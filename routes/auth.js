const router = require('express').Router();
const auth = require('../controller/authController');

router.post('/login', auth.login);
router.get('/', auth.tampil);
router.get('/cari/:nis', auth.cari);

module.exports = router;