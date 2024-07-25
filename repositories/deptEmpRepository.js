const DeptEmp = require('../models/deptEmp');

const getAllDeptEmps = async () => {
  return await DeptEmp.findAll();
};

const getDeptEmpById = async (emp_no, dept_no) => {
  return await DeptEmp.findOne({ where: { emp_no, dept_no } });
};

const createDeptEmp = async (deptEmpData) => {
  return await DeptEmp.create(deptEmpData);
};

const updateDeptEmp = async (emp_no, dept_no, deptEmpData) => {
  const deptEmp = await DeptEmp.findOne({ where: { emp_no, dept_no } });
  if (deptEmp) {
    return await deptEmp.update(deptEmpData);
  }
  return null;
};

const deleteDeptEmp = async (emp_no, dept_no) => {
  const deptEmp = await DeptEmp.findOne({ where: { emp_no, dept_no } });
  if (deptEmp) {
    await deptEmp.destroy();
    return true;
  }
  return false;
};

module.exports = {
  getAllDeptEmps,
  getDeptEmpById,
  createDeptEmp,
  updateDeptEmp,
  deleteDeptEmp,
};
