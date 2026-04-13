const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const contactInfo = {
    email: 'greenfieldcenter@gmail.com',
    phone: '+91 9876543210',
    address: '123 Community Street, Greenfield, Delhi, India'
  };
  res.json(contactInfo);
});
module.exports = router;