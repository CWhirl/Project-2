const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Rsvp extends Model {}

Rsvp.init(
  {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
        isEmail: true,
    },
    },
  },  
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'rsvp',
  }

  );

module.exports = Rsvp;



