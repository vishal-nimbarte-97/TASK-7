const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/database");
const Department = require("./department");
const Employee = require("./employee");

const DeptManager = sequelize.define(
    "DeptManager", 
    {
        dept_no: {
            type: DataTypes.STRING,
            primaryKey: true,
            references: {
                model: Department,
                key: 'dept_no'
            }
        }, 
        emp_no: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            references: {
                model: Employee,
                key: 'emp_no'
            }
        },
        from_date: {  // Corrected field name
            type: DataTypes.DATE,
            allowNull: false
        },
        to_date: {
            type: DataTypes.DATE,
            allowNull: false
        }
    }, 
    {
        tableName: "dept_manager",
        timestamps: false
    }
);

// Define associations
Department.hasMany(DeptManager, { foreignKey: 'dept_no' });
DeptManager.belongsTo(Department, { foreignKey: 'dept_no' });

Employee.hasMany(DeptManager, { foreignKey: 'emp_no' });
DeptManager.belongsTo(Employee, { foreignKey: 'emp_no' });

module.exports = DeptManager;
