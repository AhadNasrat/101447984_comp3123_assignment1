const express = require('express');
const {
    getAllEmployees,
    createEmployee,
    getEmployeeById,
    updateEmployee,
    deleteEmployee
} = require('../controllers/empController');
const router = express.Router();

// Route to get all employees
router.get('/employees', getAllEmployees);

// Route to create a new employee
router.post('/employees', createEmployee);

// Route to get an employee by ID
router.get('/employees/:eid', getEmployeeById);

// Route to update an employee by ID
router.put('/employees/:eid', updateEmployee);

// Route to delete an employee by ID (fixed: added ':eid')
router.delete('/employees/:eid', deleteEmployee);

module.exports = router;
