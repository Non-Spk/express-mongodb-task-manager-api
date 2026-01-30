const User = require('../models/User');

exports.getAllUsers = async (req, res) => {
    res.json(await User.find().select('-password'));
};

exports.getUserById = async (req, res) => {
    const user = await User.findById(req.params.id).select('-password');
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json(user);
};
