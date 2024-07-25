const express = require('express');
const router = express.Router();
const salaryController = require('../controllers/salaryController');

router.get('/', salaryController.getAllSalaries);
router.get('/:emp_no', salaryController.getSalaryByEmpNo);
router.post('/', salaryController.createSalary);
router.put('/:emp_no', salaryController.updateSalary);
router.delete('/:emp_no', salaryController.deleteSalary);

module.exports = router;
