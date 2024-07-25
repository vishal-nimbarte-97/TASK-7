const Salary = require('../models/salary');

class SalaryRepository {
  async getAllSalaries() {
    return await Salary.findAll();
  }

  async getSalaryByEmpNo(emp_no) {
    return await Salary.findOne({ where: { emp_no } });
  }

  async createSalary(salaryData) {
    return await Salary.create(salaryData);
  }

  async updateSalary(emp_no, salaryData) {
    const salary = await Salary.findOne({ where: { emp_no } });
    if (salary) {
      return await salary.update(salaryData);
    }
    return null;
  }

  async deleteSalary(emp_no) {
    const salary = await Salary.findOne({ where: { emp_no } });
    if (salary) {
      await salary.destroy();
      return true;
    }
    return false;
  }
}

module.exports = new SalaryRepository();
