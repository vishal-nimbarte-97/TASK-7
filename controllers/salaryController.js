const salaryRepository = require('../repositories/salaryRepository');

exports.getAllSalaries = async (req, res) => {
  try {
    const salaries = await salaryRepository.getAllSalaries();
    res.json(salaries);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getSalaryByEmpNo = async (req, res) => {
  try {
    const salary = await salaryRepository.getSalaryByEmpNo(req.params.emp_no);
    if (salary) {
      res.json(salary);
    } else {
      res.status(404).json({ message: 'Salary not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createSalary = async (req, res) => {
  try {
    const salary = await salaryRepository.createSalary(req.body);
    res.status(201).json(salary);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.updateSalary = async (req, res) => {
  try {
    const salary = await salaryRepository.updateSalary(req.params.emp_no, req.body);
    if (salary) {
      res.json(salary);
    } else {
      res.status(404).json({ message: 'Salary not found' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteSalary = async (req, res) => {
  try {
    const success = await salaryRepository.deleteSalary(req.params.emp_no);
    if (success) {
      res.json({ message: 'Salary deleted' });
    } else {
      res.status(404).json({ message: 'Salary not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
