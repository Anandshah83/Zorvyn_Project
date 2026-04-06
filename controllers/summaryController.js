const Record = require('../models/Record');

exports.getSummary = async (req, res) => {
    try {
        const records = await Record.find();

        let totalIncome = 0;
        let totalExpense = 0;

        records.forEach((item) => {
            if (item.type === 'income') {
                totalIncome += item.amount;
            } else {
                totalExpense += item.amount;
            }
        });

        res.json({
            totalIncome,
            totalExpense,
            balance: totalIncome - totalExpense
        });

    } catch (err) {
        res.status(500).json({ message: "Error generating summary" });
    }
    
};
exports.getCategorySummary = async (req, res) => {
    try {
        const result = await Record.aggregate([
            {
                $group: {
                    _id: "$category",
                    total: { $sum: "$amount" }
                }
            }
        ]);

        res.json(result);

    } catch (err) {
        res.status(500).json({ message: "Error fetching category summary" });
    }
};
exports.getRecentActivity = async (req, res) => {
    try {
        const records = await Record.find()
            .sort({ date: -1 })
            .limit(5);

        res.json(records);

    } catch (err) {
        res.status(500).json({ message: "Error fetching recent activity" });
    }
};