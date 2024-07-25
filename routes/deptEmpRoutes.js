const express = require('express');
const router = express.Router();
const deptEmpController = require('../controllers/deptEmpController');

router.get('/', deptEmpController.getAllDeptEmps);
router.get('/:emp_no/:dept_no', deptEmpController.getDeptEmpById);
router.post('/', deptEmpController.createDeptEmp);
router.put('/:emp_no/:dept_no', deptEmpController.updateDeptEmp);
router.delete('/:emp_no/:dept_no', deptEmpController.deleteDeptEmp);

module.exports = router;
