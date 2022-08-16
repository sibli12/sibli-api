const { Pengurus, tb_santri } = require('../models');

const login = async (req, res) => {
  const {username} = req.body;

  await Pengurus.findOne({
    where: {
      username
    }
  }).then(async (data) => {
    if (data == null) {
      res.status(404).json({
        status: 'success',
        message: 'Data kosong',
      })
    } else {
      res.status(200).json({
        status: 'success',
        message: 'login sukses',
        data: data
      })
    }
  }).catch(err => {
    res.status(400).json({
      status: 'error',
      message: err.message
    })
  })
}

const tampil = async (req, res) => {
  await Pengurus.findAll()
  .then(hasil => {
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

const cari = async (req, res) => {
  const nis = req.params.nis

  await tb_santri.findOne({
    where: {
      nis: nis
    }
  }).then(hasil => {
    res.status(200).json({
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

module.exports = {
  login,
  tampil,
  cari
}