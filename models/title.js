const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');
const Employee = require('./employee');

const Title = sequelize.define('Title', {
  emp_no: {
    type: DataTypes.INTEGER,
    references: {
      model: Employee,
      key: 'emp_no',
    },
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true,
  },
  from_date: {
    type: DataTypes.DATE,
    allowNull: false,
    primaryKey: true,
  },
  to_date: {
    type: DataTypes.DATE,
    allowNull: true,
  },
}, {
  tableName: 'titles',
  timestamps: false,
});

Employee.hasMany(Title, { foreignKey: 'emp_no' });
Title.belongsTo(Employee, { foreignKey: 'emp_no' });

module.exports = Title;
