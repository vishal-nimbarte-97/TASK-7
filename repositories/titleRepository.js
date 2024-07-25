const Title = require('../models/title');

class TitleRepository {
  async getAllTitles() {
    return await Title.findAll();
  }

  async getTitlesByEmpNo(emp_no) {
    return await Title.findAll({ where: { emp_no } });
  }

  async createTitle(titleData) {
    return await Title.create(titleData);
  }

  async updateTitle(emp_no, title, from_date, titleData) {
    const titleInstance = await Title.findOne({ where: { emp_no, title, from_date } });
    if (titleInstance) {
      return await titleInstance.update(titleData);
    }
    return null;
  }

  async deleteTitle(emp_no, title, from_date) {
    const titleInstance = await Title.findOne({ where: { emp_no, title, from_date } });
    if (titleInstance) {
      await titleInstance.destroy();
      return true;
    }
    return false;
  }
}

module.exports = new TitleRepository();
