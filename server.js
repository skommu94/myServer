const express = require('express');
const cors = require('cors');
const app = express();

const employees = [
    {
      "id": 1,
      "name": "John Doe",
      "title": "Developer",
       "avatarURL": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
     
    },
    {
      "id": 2,
      "name": "Jane Smith",
      "title": "Designer",
      "avatarURL": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
    },
    {
      "id": 3,
      "name": "Michael Johnson",
      "title": "Product Manager",
      "avatarURL": "https://plus.unsplash.com/premium_photo-1689977871600-e755257fb5f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE2fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60"
    },
    {
      "id": 4,
      "name": "Emily Williams",
      "title": "Marketing Specialist",
      "avatarURL": "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60"
    },
    {
      "id": 5,
      "name": "Alex Turner",
      "title": "Data Analyst",
      "avatarURL": "https://images.unsplash.com/photo-1516914943479-89db7d9ae7f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8OTY5NDM4NDd8fGVufDB8fHx8fA%3D%3D&dpr=1&auto=format&fit=crop&w=294&h=294&q=60"
    },
    {
      "id": 6,
      "name": "Olivia Lee",
      "title": "UI/UX Designer",
      "avatarURL": "https://images.unsplash.com/photo-1474176857210-7287d38d27c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      "id": 7,
      "name": "William Clark",
      "title": "Software Engineer",
      "avatarURL": "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
    },
    {
      "id": 8,
      "name": "Sophia Anderson",
      "title": "Content Writer",
      "avatarURL": "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      "id": 9,
      "name": "Ethan Brown",
      "title": "Front-end Developer",
      "avatarURL": "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      "id": 10,
      "name": "Ava Martinez",
      "title": "HR Manager",
      "avatarURL": "https://images.unsplash.com/photo-1530021232320-687d8e3dba54?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
    }
];

// Use the cors middleware to enable CORS
app.use(cors());

app.get('/', (req, res) => {
  res.json(employees );
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
