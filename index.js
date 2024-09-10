const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

app.use(cors()); 
app.use(express.json());

// Foydalanuvchilarning IP-manzilini cheklash
const allowedIP = '89.236.218.41'; // Ruxsat berilgan IP-manzil

// IP manzilni tekshiruvchi middleware
const checkIP = (req, res, next) => {
    const clientIP = req.ip.replace('::ffff:', ''); // IPv4 manzilini olish
    if (clientIP === allowedIP) {
        next(); // Ruxsat berilgan IP bo'lsa, keyingi bosqichga o'tadi
    } else {
        res.status(403).json({ message: 'Bu APIga kirishga ruxsat berilmagan!' }); // Ruxsat yo'q
    }
};

// End-pointlar uchun middleware qo'llash
app.use(checkIP);

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
