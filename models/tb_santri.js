module.exports = (sequelize, DataTypes) => {
  const tb_santri = sequelize.define('tb_santri', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    nis: {
      type: DataTypes.INTEGER
    },
    nama: {
      type: DataTypes.STRING
    },
    tempat: {
      type: DataTypes.STRING
    },
    tanggal: {
      type: DataTypes.STRING
    },
    jkl: {
      type: DataTypes.STRING
    },
    desa: {
      type: DataTypes.STRING
    },
    kec: {
      type: DataTypes.STRING
    },
    kab: {
      type: DataTypes.STRING
    },
    k_formal: {
      type: DataTypes.STRING
    },
    t_formal: {
      type: DataTypes.STRING
    },
    k_madin: {
      type: DataTypes.STRING
    },
    r_madin: {
      type: DataTypes.STRING
    },
    komplek: {
      type: DataTypes.STRING
    },
    kamar: {
      type: DataTypes.STRING
    },
    bapak: {
      type: DataTypes.STRING
    },
    ibu: {
      type: DataTypes.STRING
    },
    hp: {
      type: DataTypes.STRING
    },
    pass: {
      type: DataTypes.STRING
    },
    foto: {
      type: DataTypes.STRING
    },
    stts: {
      type: DataTypes.STRING
    },
    t_kos: {
      type: DataTypes.INTEGER
    },
    ket: {
      type: DataTypes.INTEGER
    }
  }, {
    tableName: 'tb_santri',
    timestamps: false
  })

  return tb_santri;
}