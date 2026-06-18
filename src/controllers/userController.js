const pool = require('../config/db');

// Create User
exports.createUser = async (req, res) => {
    try {
        const { name, email, phone } = req.body;

        const result = await pool.query(
            'INSERT INTO users(name,email,phone) VALUES($1,$2,$3) RETURNING *',
            [name, email, phone]
        );

        res.status(201).json(result.rows[0]);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
};

// Get All Users
exports.getUsers = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM users');
        res.json(result.rows);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get User By ID
exports.getUserById = async (req, res) => {
    try {
        const result = await pool.query(
            'SELECT * FROM users WHERE id=$1',
            [req.params.id]
        );

        res.json(result.rows[0]);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update User
exports.updateUser = async (req, res) => {
    try {
        const { name, email, phone } = req.body;

        const result = await pool.query(
            `UPDATE users
             SET name=$1,email=$2,phone=$3
             WHERE id=$4
             RETURNING *`,
            [name, email, phone, req.params.id]
        );

        res.json(result.rows[0]);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete User
exports.deleteUser = async (req, res) => {
    try {
        await pool.query(
            'DELETE FROM users WHERE id=$1',
            [req.params.id]
        );

        res.json({
            message: 'User Deleted Successfully'
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
