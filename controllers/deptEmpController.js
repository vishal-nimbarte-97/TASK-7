const deptEmpRepository = require('../repositories/deptEmpRepository');

const getAllDeptEmps = async (req, res) => {
  try {
    const deptEmps = await deptEmpRepository.getAllDeptEmps();
    res.json(deptEmps);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getDeptEmpById = async (req, res) => {
  try {
    const { emp_no, dept_no } = req.params;
    const deptEmp = await deptEmpRepository.getDeptEmpById(emp_no, dept_no);
    if (deptEmp) {
      res.json(deptEmp);
    } else {
      res.status(404).json({ error: 'DeptEmp record not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createDeptEmp = async (req, res) => {
  try {
    const deptEmp = await deptEmpRepository.createDeptEmp(req.body);
    res.status(201).json(deptEmp);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateDeptEmp = async (req, res) => {
  try {
    const { emp_no, dept_no } = req.params;
    const deptEmp = await deptEmpRepository.updateDeptEmp(emp_no, dept_no, req.body);
    if (deptEmp) {
      res.json(deptEmp);
    } else {
      res.status(404).json({ error: 'DeptEmp record not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteDeptEmp = async (req, res) => {
  try {
    const { emp_no, dept_no } = req.params;
    const success = await deptEmpRepository.deleteDeptEmp(emp_no, dept_no);
    if (success) {
      res.status(204).send();
    } else {
      res.status(404).json({ error: 'DeptEmp record not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllDeptEmps,
  getDeptEmpById,
  createDeptEmp,
  updateDeptEmp,
  deleteDeptEmp,
};
