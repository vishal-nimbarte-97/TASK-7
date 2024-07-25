const DeptManager = require('../models/deptManager');

const getAllDeptManagers = async () => {
  return await DeptManager.findAll();
};

const getDeptManagerById = async (dept_no, emp_no) => {
  return await DeptManager.findOne({ where: { dept_no, emp_no } });
};

const createDeptManager = async (data) => {
  return await DeptManager.create(data);
};

const updateDeptManager = async (dept_no, emp_no, data) => {
  const deptManager = await getDeptManagerById(dept_no, emp_no);
  if (deptManager) {
    return await deptManager.update(data);
  }
  return null;
};

const deleteDeptManager = async (dept_no, emp_no) => {
  const deptManager = await getDeptManagerById(dept_no, emp_no);
  if (deptManager) {
    return await deptManager.destroy();
  }
  return false;
};

module.exports = {
  getAllDeptManagers,
  getDeptManagerById,
  createDeptManager,
  updateDeptManager,
  deleteDeptManager,
};
