const Task = require('../models/Task');

exports.createTask = async (req, res) => {
    const task = await Task.create({ ...req.body, assignedTo: req.user.id });
    res.status(201).json(task);
};

exports.getTasks = async (req, res) => {
    res.json(await Task.find({ assignedTo: req.user.id }));
};

exports.getTask = async (req, res) => {
    const task = await Task.findById(req.params.id);
    if (!task) return res.status(404).json({ message: 'Not found' });
    res.json(task);
};

exports.updateTask = async (req, res) => {
    const task = await Task.findById(req.params.id);
    if (!task) return res.status(404).json({ message: 'Not found' });

    if (task.assignedTo.toString() !== req.user.id && req.user.role !== 'admin')
        return res.status(403).json({ message: 'Forbidden' });

    Object.assign(task, req.body);
    await task.save();
    res.json(task);
};

exports.deleteTask = async (req, res) => {
    const task = await Task.findById(req.params.id);
    if (!task) return res.status(404).json({ message: 'Not found' });

    if (task.assignedTo.toString() !== req.user.id && req.user.role !== 'admin')
        return res.status(403).json({ message: 'Forbidden' });

    await task.deleteOne();
    res.json({ message: 'Deleted' });
};
