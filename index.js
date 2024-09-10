const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Foydalanuvchilarni saqlaydigan array
let users = [
    {
        "title": "effefss",
        "description": "segsegsegdvf",
        "id": 74
      },
      {
        "title": "segsge",
        "description": "segeg",
        "id": 75
      },
      {
        "title": "loremmmmmmmm",
        "description": "mmmmmmmmmmmmm",
        "id": 76
      },
      {
        "title": "iiiiiiiiiii",
        "description": "iiiiiiiiiiiiii",
        "id": 77
      },
      {
        "title": "99999999999999",
        "description": "9999999999999",
        "id": 78
      },
      {
        "title": "awdawd",
        "description": "awdawd",
        "id": 80
      },
      {
        "title": "awdawd",
        "description": "awdawdawd",
        "id": 81
      },
      {
        "title": "abdulaziz",
        "description": "abdulazizizzzzzzz",
        "id": 82
      },
      {
        "title": "salom",
        "description": "gefwrqewrhetrjy@sydhufjig",
        "id": 83
      },
      {
        "title": "awffwadssfg",
        "description": "awfawfawf@dfsffs",
        "id": 84
      },
      {
        "title": "sadsdf",
        "description": "gefwrqewrhetrjy@sydhufjig",
        "id": 85
      },
      {
        "title": "awffwa",
        "description": "awfawfawf@dfsffs",
        "id": 86
      },
      {
        "title": "salom",
        "description": "gefwrqewrhetrjy@sydhufjig",
        "id": 87
      },
      {
        "title": "iiiiiiiiiiiftrygiuh",
        "description": "iiiiiiiiiiiiii@fdgsfdg",
        "id": 88
      },
      {
        "title": "effefss",
        "description": "segsegsegdvf",
        "id": 89
      }
    
];

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
