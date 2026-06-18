const express = require('express');
const cors = require('cors');

const userRoutes = require('./routes/userRoutes');

const app = express();

app.use(express.json()); // Important

app.use(cors());

app.use('/api', userRoutes);

app.listen(5000, () => {
    console.log('Server running on port 5000');
});