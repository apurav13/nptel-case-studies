const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const classes = [
    {
      id: 1,
      name: 'Art Class',
      timing: 'Tuesday - 4:00 PM'
    },
    {
      id: 2,
      name: 'Music Class',
      timing: 'Thursday - 3:00 PM'
    },
    {
      id: 3,
      name: 'Yoga Class',
      timing: 'Saturday - 11:00 AM'
    },
    {
        id: 4,
        name: 'Swimming Class',
        timing: 'Sunday - 2:00 PM'
    }
  ];
  res.json(classes);
});
module.exports = router;