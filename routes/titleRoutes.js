const express = require('express');
const router = express.Router();
const titleController = require('../controllers/titleController');

router.get('/', titleController.getAllTitles);
router.get('/:emp_no', titleController.getTitlesByEmpNo);
router.post('/', titleController.createTitle);
router.put('/:emp_no/:title/:from_date', titleController.updateTitle);
router.delete('/:emp_no/:title/:from_date', titleController.deleteTitle);

module.exports = router;
