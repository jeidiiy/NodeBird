const express = require('express');

const router = express.Router();

router.post('/post', (req, res) => {
  res.json({ id: 1, content: 'hello' });
});

router.delete('/delete', (req, res) => {
  res.json({ id: 1 });
});

module.exports = router;
