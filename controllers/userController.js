const User = require('../models/User');

exports.toggleUserStatus = async (req, res) => {
    try {
        const { id } = req.params;

        const user = await User.findById(id);

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        user.active = !user.active;
        await user.save();

        res.json({
            message: "User status updated",
            active: user.active
        });

    } catch (err) {
        res.status(500).json({ message: "Error updating user status" });
    }
};