const express = require('express');
const app = express();
const { sequelize } = require('./config/database');

// Middleware
app.use(express.json());

// Routes
const employeeRoutes = require('./routes/employeeRoutes');
const departmentRoutes = require('./routes/departmentRoutes');
const deptEmpRoutes = require('./routes/deptEmpRoutes');
const deptManagerRoutes = require('./routes/deptManagerRoutes');
const salaryRoutes = require('./routes/salaryRoutes');
const titleRoutes = require('./routes/titleRoutes');

app.use('/employees', employeeRoutes);
app.use('/departments', departmentRoutes);
app.use('/dept-emps', deptEmpRoutes);
app.use('/dept-managers', deptManagerRoutes);  
app.use('/salaries', salaryRoutes);
app.use('/titles', titleRoutes);

// Start Server
const PORT = 3000;
app.listen(PORT, async () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  try {
    await sequelize.authenticate();
    console.log('Database connection has been established successfully.');
    // Synchronize models with the database
    await sequelize.sync({ force: false });  // This will drop and recreate the tables
    console.log('Database synchronized successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
});
