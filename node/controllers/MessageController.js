import MessageModel from "../models/MessageModel.js";

// Show all records
export const getAllMessages = async (req, res) => {
    try {
        const messages = await MessageModel.findAll({
            order: [['date', 'DESC']]
        });
        res.json(messages);
    } catch (error) {
        res.json({ message: error.message });
    }
};

// Create a record
export const createMessage = async (req, res) => {
    try {
        const { category, message } = req.body;

        const subscribers = [
            {
                id: 1,
                name: "User 1",
                email: "user1@example.com",
                phoneNumber: "123456789",
                subscribed: ["Sports"],
                channels: ["SMS"],
            },
            {
                id: 2,
                name: "User 2",
                email: "user2@example.com",
                phoneNumber: "987654321",
                subscribed: ["Finance", "Movies"],
                channels: ["E-Mail"],
            },
            {
                id: 3,
                name: "User 3",
                email: "user3@example.com",
                phoneNumber: "98685258",
                subscribed: ["Sports", "Finance", "Movies"],
                channels: ["Push"],
            },
            {
                id: 4,
                name: "User 4",
                email: "user4@example.com",
                phoneNumber: "123423423",
                subscribed: ["Sports", "Finance"],
                channels: ["Push"],
            },
            {
                id: 5,
                name: "User 5",
                email: "user5@example.com",
                phoneNumber: "876543456",
                subscribed: ["Sports", "Movies"],
                channels: ["SMS"],
            },
        ];

        // Get the subscribers corresponding to the category
        const categorySubscribers = subscribers.filter((subscriber) =>
            subscriber.subscribed.includes(category)
        );

        const log = JSON.stringify(categorySubscribers)

        await MessageModel.create({ category, message, log });
        res.json({
            message: 'Record created successfully',
        });
    } catch (error) {
        res.json({ message: error.message });
    }
};


// Delete a record
export const deleteMessage = async (req, res) => {
    try {
        await MessageModel.destroy({
            where: { id: req.params.id }
        });
        res.json({
            "message": "Record deleted successfully"
        });
    } catch (error) {
        console.log('Error deleting record:', error.message);
        res.json({ message: error.message });
    }
};