const router = require('express').Router();
const santri = require('../controller/santri');

router.get('/', santri.getAll);
router.get('/:id', santri.getDetail);

module.exports = router;