const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to Greenfield Community Center!');
});

app.get('/events', (req, res) => {
  const events = [
    {
      id: 1,
      title: 'Yoga Class',
      schedule: 'Monday - 7:00 PM'
    },
    {
      id: 2,
      title: 'Gardening Workshop',
      schedule: 'Wednesday - 5:00 PM'
    },
    {
      id: 3,
      title: 'Book Club',
      schedule: 'Friday - 6:00 PM'
    }
  ];

  res.json(events);
});

app.get('/contact', (req, res) => {
  const contactInfo = {
    email: 'greenfield@gmail.com',
    phone: '+91 9876543210',
    address: '123 Street 5, Greenfield, Delhi-110001'
  };

  res.json(contactInfo);
});

app.use((req, res) => {
  res.status(404).send('Sorry! The page you are looking for does not exist.');
});

app.listen(port, () => {
  console.log(`Greenfield Community Center server is running at http://localhost:${port}`);
});