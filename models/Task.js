const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: String,
    status: { type: String, enum: ['pending', 'completed'], default: 'pending' },
    assignedTo: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    dueDate: Date,
}, { timestamps: true });

module.exports = mongoose.model('Task', taskSchema);
