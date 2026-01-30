require('dotenv').config();
const mongoose = require('mongoose');
const User = require('./models/User');
const Task = require('./models/Task');

(async () => {
    await mongoose.connect(process.env.MONGO_URI);
    await User.deleteMany();
    await Task.deleteMany();

    const admin = await User.create({
        name: 'Admin',
        email: 'admin@test.com',
        password: '123456',
        role: 'admin'
    });

    await Task.create({
        title: 'First Task',
        assignedTo: admin._id
    });

    console.log('Seeded');
    process.exit();
})();
