const deptManagerRepository = require('../repositories/deptManagerRepository');

const getAllDeptManagers = async (req, res) => {
  try {
    const deptManagers = await deptManagerRepository.getAllDeptManagers();
    res.json(deptManagers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getDeptManagerById = async (req, res) => {
  try {
    const { dept_no, emp_no } = req.params;
    const deptManager = await deptManagerRepository.getDeptManagerById(dept_no, emp_no);
    if (deptManager) {
      res.json(deptManager);
    } else {
      res.status(404).json({ error: 'DeptManager record not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createDeptManager = async (req, res) => {
  try {
    const deptManager = await deptManagerRepository.createDeptManager(req.body);
    res.status(201).json(deptManager);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateDeptManager = async (req, res) => {
  try {
    const { dept_no, emp_no } = req.params;
    const deptManager = await deptManagerRepository.updateDeptManager(dept_no, emp_no, req.body);
    if (deptManager) {
      res.json(deptManager);
    } else {
      res.status(404).json({ error: 'DeptManager record not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteDeptManager = async (req, res) => {
  try {
    const { dept_no, emp_no } = req.params;
    const success = await deptManagerRepository.deleteDeptManager(dept_no, emp_no);
    if (success) {
      res.status(204).send();
    } else {
      res.status(404).json({ error: 'DeptManager record not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllDeptManagers,
  getDeptManagerById,
  createDeptManager,
  updateDeptManager,
  deleteDeptManager,
};
