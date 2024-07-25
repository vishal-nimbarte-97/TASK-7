const { Sequelize } = require('sequelize');

// Database connection setup
const sequelize = new Sequelize('TASK-7', 'postgres', '2001', {
    host: 'localhost',
    dialect: 'postgres',
});

// Authenticate the connection
const authenticateDatabase = async () => {
    try {
        await sequelize.authenticate();
        console.log('Database connection established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
};

// Export both sequelize instance and authentication function
module.exports = { sequelize, authenticateDatabase };
