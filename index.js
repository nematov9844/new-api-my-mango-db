const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Foydalanuvchilarni saqlaydigan array
let users = [];

// Foydalanuvchilar ro'yxatini olish
app.get('/api/users', (req, res) => {
    res.json(users);
});

// Yangi foydalanuvchi qo'shish
app.post('/api/users', (req, res) => {
    const user = req.body;
    users.push(user);
    res.status(201).json(user);
});

// Serverni ishga tushirish
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
