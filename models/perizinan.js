module.exports = (sequelize, DataTypes) => {
  const perizinan = sequelize.define('perizinan', {
    id_perizinan: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    nis: {
      type: DataTypes.STRING
    },
    tujuan: {
      type: DataTypes.STRING
    },
    keperluan: {
      type: DataTypes.TEXT
    },
    tgl_pulang: {
      type: DataTypes.STRING
    },
    wajib_kembali: {
      type: DataTypes.STRING
    },
    tgl_kembali: {
      type: DataTypes.STRING
    },
    syarat: {
      type: DataTypes.STRING
    },
    keterangan: {
      type: DataTypes.INTEGER
    },
    konfir: {
      type: DataTypes.INTEGER
    },
    id_pengurus: {
      type: DataTypes.INTEGER
    }
  }, {
    tableName: 'perizinan',
    timestamps: false
  })

  return perizinan;
}