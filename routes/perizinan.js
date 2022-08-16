const router = require('express').Router();
const izin = require('../controller/perizinan');

router.get('/bacaTelat', izin.bacaTelat);
router.get('/baca', izin.baca);
router.get('/baca/:id_perizinan', izin.getDetail);
router.post('/tambah', izin.tambah);
router.post('/tambah-keluar', izin.tambahKeluar);
router.put('/edit/:id', izin.edit);
router.put('/persetujuan/:id_perizinan', izin.updateTelat);
router.put('/konfirmasi/:id_perizinan', izin.updateKonfirmasi);
router.delete('/hapus/:id', izin.hapus);

module.exports = router;