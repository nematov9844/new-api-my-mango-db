const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 3000;

// MongoDB-ga ulanish
const mongoURI = 'mongodb+srv://Rozimuhammad:<db_password>@nr-stylle.dztva.mongodb.net/?retryWrites=true&w=majority&appName=NR-stylle';

mongoose.connect(mongoURI, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log('MongoDB connection error:', err));

// Foydalanuvchi modelini yaratish
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number
});

const User = mongoose.model('User', userSchema);

app.use(cors());
app.use(express.json());

// Foydalanuvchilar ro'yxatini olish
app.get('/api/users', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Yangi foydalanuvchi qo'shish
app.post('/api/users', async (req, res) => {
    const user = new User(req.body);
    try {
        const newUser = await user.save();
        res.status(201).json(newUser);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Serverni ishga tushirish
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
