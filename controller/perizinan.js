const moment = require("moment");
const { perizinan, sequelize } = require('../models');
const { Op } = require("sequelize");
moment.locale("id");

const bacaTelat = async (req, res) => {
  const data = await sequelize.query("SELECT id_perizinan AS id, nis, tujuan, keperluan, DATE(tgl_kembali) AS tgl_kembali, DATE(wajib_kembali) AS wajib_kembali FROM perizinan WHERE DATE(tgl_kembali) > DATE(wajib_kembali)");
  return res.json({
    success: true,
    message: "sukses tampil data",
    data: data[0]
  });
}

const baca = async (req, res) => {
  await perizinan.findAll({
    attributes: ['id_perizinan', 'nis', 'tujuan', 'keperluan', 'tgl_pulang', 'wajib_kembali', 'tgl_kembali', 'syarat', 'keterangan', 'konfir', 'id_pengurus']
  }).then(hasil => {
    res.status(201).json({
      status: 'sukses',
      message: 'sukses tampil data',
      data: hasil
    })
  }).catch(err => {
    res.status(400).json({
      status: 'error',
      message: err.message
    })
  })
}

const getDetail = async (req, res) => {
  const id_perizinan = req.params.id_perizinan

  await perizinan.findOne({
    where: {
      id_perizinan: id_perizinan
    }
  }).then(hasil => {
    res.status(201).json({
      status: 'sukses',
      message: 'sukses tampil data',
      data: hasil
    })
  }).catch(err => {
    res.status(400).json({
      status: 'error',
      message: err.message
    })
  })
}

const tambah = async (req, res) => {
  const { nis, tujuan, keperluan, tgl_pulang, wajib_kembali, syarat, keterangan, id_pengurus } = req.body

  await perizinan.create({
    nis, tujuan, keperluan, tgl_pulang, wajib_kembali, syarat, keterangan, id_pengurus
  }).then(hasil => {
    res.status(201).json({
      status: 'sukses',
      message: 'sukses tambah data',
      data: hasil
    })
  }).catch(err => {
    res.status(400).json({
      status: 'error',
      message: err.message
    })
  })
}

const tambahKeluar = async (req, res) => {
  const { nis, tujuan, keperluan, tgl_pulang, wajib_kembali, syarat, keterangan, id_pengurus } = req.body

  await perizinan.create({
    nis, tujuan, keperluan, tgl_pulang, wajib_kembali, syarat, konfir: 1, keterangan, id_pengurus
  }).then(hasil => {
    res.status(201).json({
      status: 'sukses',
      message: 'sukses tambah data',
      data: hasil
    })
  }).catch(err => {
    res.status(400).json({
      status: 'error',
      message: err.message
    })
  })
}

const edit = async (req, res) => {
  const { id } = req.params.id
  const { nis, tujuan, keperluan, tgl_pulang, wajib_kembali, syarat, keterangan, id_pengurus } = req.body

  await perizinan.update({
    nis, tujuan, keperluan, tgl_pulang, wajib_kembali, syarat, keterangan, id_pengurus
  }, {
    where: {
      id: id
    }
  }).then(hasil => {
    res.status(201).json({
      status: 'sukses',
      message: 'sukses edit data'
    })
  }).catch(err => {
    res.status(400).json({
      status: 'error',
      message: err.message
    })
  })
}

const updateTelat = async (req, res) => {
  const id_perizinan = req.params.id_perizinan
  const { tgl_kembali } = req.body

  await perizinan.update({
    tgl_kembali
  }, {
    where: {
      id_perizinan: id_perizinan
    }
  }).then(() => {
    res.status(200).json({
      status: 'sukses',
      message: 'sukses update'
    })
  }).catch(err => {
    res.status(400).json({
      status: 'error',
      message: err.message
    })
  })
}

const updateKonfirmasi = async (req, res) => {
  const id_perizinan = req.params.id_perizinan
  const { konfir } = req.body

  await perizinan.update({
    konfir
  }, {
    where: {
      id_perizinan: id_perizinan
    }
  }).then(() => {
    res.status(200).json({
      status: 'sukses',
      message: 'sukses update konfirmasi'
    })
  }).catch(err => {
    res.status(400).json({
      status: 'error',
      message: err.message
    })
  })
}

const hapus = async (req, res) => {
  const { id } = req.params.id

  await perizinan.destroy({
    where: {
      id: id
    }
  }).then(hasil => {
    res.status(200).json({
      status: 'sukses',
      message: 'sukses hapus data'
    })
  }).catch(err => {
    res.status(400).json({
      status: 'error',
      message: err.message
    })
  })
}


module.exports = {
  bacaTelat,
  baca,
  getDetail,
  tambah,
  tambahKeluar,
  edit,
  updateTelat,
  updateKonfirmasi,
  hapus
}