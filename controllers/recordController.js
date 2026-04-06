const Record = require('../models/Record');

//  CREATE RECORD
exports.createRecord = async (req, res) => {
    try {
        const record = await Record.create({
            ...req.body,
            userId: req.user.id
        });

        res.json(record);
    } catch (err) {
        res.status(500).json({ message: "Error creating record" });
    }
};


// GET RECORDS (WITH FILTERING)
exports.getRecords = async (req, res) => {
    try {
        const { type, category, startDate, endDate } = req.query;

        let filter = {};

        // filter by type
        if (type) {
            filter.type = type;
        }

        // filter by category
        if (category) {
            filter.category = category;
        }

        // filter by date range
        if (startDate && endDate) {
            filter.date = {
                $gte: new Date(startDate),
                $lte: new Date(endDate)
            };
        }

        const records = await Record.find(filter);

        res.json(records);

    } catch (err) {
        res.status(500).json({ message: "Error fetching records" });
    }
};


// UPDATE RECORD
exports.updateRecord = async (req, res) => {
    try {
        const { id } = req.params;

        const updatedRecord = await Record.findByIdAndUpdate(
            id,
            req.body,
            { new: true }
        );

        if (!updatedRecord) {
            return res.status(404).json({ message: "Record not found" });
        }

        res.json(updatedRecord);

    } catch (err) {
        res.status(500).json({ message: "Error updating record" });
    }
};


// DELETE RECORD
exports.deleteRecord = async (req, res) => {
    try {
        const { id } = req.params;

        const deletedRecord = await Record.findByIdAndDelete(id);

        if (!deletedRecord) {
            return res.status(404).json({ message: "Record not found" });
        }

        res.json({ message: "Record deleted successfully" });

    } catch (err) {
        res.status(500).json({ message: "Error deleting record" });
    }
};