const titleRepository = require('../repositories/titleRepository');

exports.getAllTitles = async (req, res) => {
  try {
    const titles = await titleRepository.getAllTitles();
    res.json(titles);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getTitlesByEmpNo = async (req, res) => {
  try {
    const titles = await titleRepository.getTitlesByEmpNo(req.params.emp_no);
    if (titles.length > 0) {
      res.json(titles);
    } else {
      res.status(404).json({ message: 'Titles not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createTitle = async (req, res) => {
  try {
    const title = await titleRepository.createTitle(req.body);
    res.status(201).json(title);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.updateTitle = async (req, res) => {
  try {
    const { emp_no, title, from_date } = req.params;
    const titleInstance = await titleRepository.updateTitle(emp_no, title, from_date, req.body);
    if (titleInstance) {
      res.json(titleInstance);
    } else {
      res.status(404).json({ message: 'Title not found' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteTitle = async (req, res) => {
  try {
    const { emp_no, title, from_date } = req.params;
    const success = await titleRepository.deleteTitle(emp_no, title, from_date);
    if (success) {
      res.json({ message: 'Title deleted' });
    } else {
      res.status(404).json({ message: 'Title not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
