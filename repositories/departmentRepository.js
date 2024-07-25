const Department = require('../models/department');

const getAllDepartments = async () => {
  return await Department.findAll();
};

const getDepartmentById = async (id) => {
  return await Department.findByPk(id);
};

const createDepartment = async (departmentData) => {
  return await Department.create(departmentData);
};

const updateDepartment = async (id, departmentData) => {
  const department = await Department.findByPk(id);
  if (department) {
    return await department.update(departmentData);
  }
  return null;
};

const deleteDepartment = async (id) => {
  const department = await Department.findByPk(id);
  if (department) {
    await department.destroy();
    return true;
  }
  return false;
};

module.exports = {
  getAllDepartments,
  getDepartmentById,
  createDepartment,
  updateDepartment,
  deleteDepartment,
};
