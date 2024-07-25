const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');
const Employee = require('./employee');

const Salary = sequelize.define('Salary', {
  emp_no: {
    type: DataTypes.INTEGER,
    references: {
      model: Employee,
      key: 'emp_no',
    },
    primaryKey: true,
  },
  salary: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  from_date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  to_date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
}, {
  tableName: 'salaries',
  timestamps: false,
});

Employee.hasMany(Salary, { foreignKey: 'emp_no' });
Salary.belongsTo(Employee, { foreignKey: 'emp_no' });

module.exports = Salary;
