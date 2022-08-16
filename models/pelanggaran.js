module.exports = (sequelize, DataTypes) => {
  const perizinan = sequelize.define('pelanggaran', {
    id_pelanggaran: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    nis: {
      type: DataTypes.STRING
    },
    kasus: {
      type: DataTypes.TEXT
    },
    kronologis: {
      type: DataTypes.TEXT
    },
    tanggal: {
      type: DataTypes.STRING
    },
    tempat: {
      type: DataTypes.STRING
    },
    ketr: {
      type: DataTypes.TEXT
    },
    sanksi: {
      type: DataTypes.TEXT
    },
    status: {
      type: DataTypes.STRING
    },
    id_pengurus: {
      type: DataTypes.INTEGER
    }
  }, {
    tableName: 'pelanggaran',
    timestamps: false
  })

  return perizinan;
}