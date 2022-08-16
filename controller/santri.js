const { tb_santri } = require('../models');

const getAll = async (req, res) => {
  await tb_santri.findAll()
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

const getDetail = async (req, res) => {
  const id = req.params.id

  await tb_santri.findOne({
    where: {
      id: id
    }
  }).then(hasil => {
    res.status(200).json({
      status: 'sukses',
      message: 'sukses tampil ',
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
  getAll,
  getDetail
}