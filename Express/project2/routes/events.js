const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const events = [
    {
      id: 1,
      name: 'Yoga Class',
      schedule: 'Monday - 7:00 PM'
    },
    {
      id: 2,
      name: 'Gardening Workshop',
      schedule: 'Wednesday - 5:00 PM'
    },
    {
      id: 3,
      name: 'Cooking Class',
      schedule: 'Friday - 6:00 PM'
    }
  ];
  res.json(events);
});
module.exports = router;