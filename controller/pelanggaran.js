const { pelanggaran } = require('../models');

const baca = async (req, res) => {
  await pelanggaran.findAll({
    attributes: ['id_pelanggaran', 'nis', 'kasus', 'kronologis', 'tanggal', 'tempat', 'ketr', 'sanksi', 'status', 'id_pengurus']
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
  const id_pelanggaran = req.params.id_pelanggaran

  await pelanggaran.findOne({
    where: {
      id_pelanggaran: id_pelanggaran
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
  const { nis, kasus, kronologis, tanggal, tempat,ketr, sanksi, status, id_pengurus } = req.body

  await pelanggaran.create({
    nis, kasus, kronologis, tanggal, tempat,ketr, sanksi, status, id_pengurus
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
  const { nis, kasus, kronologis, tanggal, tempat,ketr, sanksi, status, id_pengurus } = req.body

  await pelanggaran.update({
    nis, kasus, kronologis, tanggal, tempat,ketr, sanksi, status, id_pengurus
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

const hapus = async (req, res) => {
  const { id } = req.params.id

  await pelanggaran.destroy({
    where: {
      id: id
    }
  }).then(hasil => {
    res.status(201).json({
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
  baca,
  getDetail,
  tambah,
  edit,
  hapus
}