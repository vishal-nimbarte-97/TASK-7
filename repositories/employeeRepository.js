const Employee = require('../models/employee');

const getAllEmployees = async () => {
  return await Employee.findAll();
};

const getEmployeeById = async (id) => {
  return await Employee.findByPk(id);
};

const createEmployee = async (employeeData) => {
  return await Employee.create(employeeData);
};

const updateEmployee = async (id, employeeData) => {
  const employee = await Employee.findByPk(id);
  if (employee) {
    return await employee.update(employeeData);
  }
  return null;
};

const deleteEmployee = async (id) => {
  const employee = await Employee.findByPk(id);
  if (employee) {
    await employee.destroy();
    return true;
  }
  return false;
};

module.exports = {
  getAllEmployees,
  getEmployeeById,
  createEmployee,
  updateEmployee,
  deleteEmployee,
};
