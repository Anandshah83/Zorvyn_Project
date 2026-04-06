const express = require('express');
require('dotenv').config();

const connectDB = require('./config/database');

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 8000;

connectDB();

app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/records', require('./routes/recordRoutes'));
app.use('/api/summary', require('./routes/summaryRoutes'));
app.use('/api/users', require('./routes/userRoutes'));

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});