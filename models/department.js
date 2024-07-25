const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const Department = sequelize.define('Department', {
  dept_no: {
    type: DataTypes.STRING,
    primaryKey: true,
  },
  dept_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: 'departments',
  timestamps: false,
});

module.exports = Department;
