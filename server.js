require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');
const connectDB = require('./config/db');
const error = require('./middleware/error');

connectDB();

const app = express();
app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(morgan('dev'));

app.use('/auth', require('./routes/auth.routes'));
app.use('/users', require('./routes/user.routes'));
app.use('/tasks', require('./routes/task.routes'));

app.use(error);

app.listen(process.env.PORT || 5000, () =>
    console.log('Server running')
);
