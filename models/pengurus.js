module.exports = (sequelize, DataTypes) => {
  const Pengurus = sequelize.define('Pengurus', {
    id_pengurus: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    nama: {
      type: DataTypes.STRING
    },
    username: {
      type: DataTypes.STRING
    },
    password: {
      type: DataTypes.STRING
    },
    stts: {
      type: DataTypes.INTEGER
    },
    level: {
      type: DataTypes.STRING
    }
  }, {
    tableName: 'pengurus',
    timestamps: false
  })

  return Pengurus;
}