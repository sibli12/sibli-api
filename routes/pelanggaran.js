const router = require('express').Router();
const pelanggaran = require('../controller/pelanggaran');

router.get('/baca', pelanggaran.baca);
router.get('/baca/:id_pelanggaran', pelanggaran.getDetail);
router.post('/tambah', pelanggaran.tambah);
router.post('/edit/:id', pelanggaran.edit);
router.post('/hapus/:id', pelanggaran.hapus);

module.exports = router;