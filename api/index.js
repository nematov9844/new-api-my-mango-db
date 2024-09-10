const mongoose = require('mongoose');

const mongoURI = 'mongodb+srv://Rozimuhammad:<db_password>@nr-stylle.dztva.mongodb.net/?retryWrites=true&w=majority&appName=NR-stylle';

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number
});

const User = mongoose.model('User', userSchema);

module.exports = async (req, res) => {
    if (mongoose.connection.readyState !== 1) {
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
    }

    if (req.method === 'GET') {
        try {
            const users = await User.find();
            res.status(200).json(users);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    } else if (req.method === 'POST') {
        const user = new User(req.body);
        try {
            const newUser = await user.save();
            res.status(201).json(newUser);
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    } else {
        res.setHeader('Allow', ['GET', 'POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
};
