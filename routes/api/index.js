const router = require('express').Router();

router.get('/books', async (req, res) => {
  try {
    const bookData = await Book.findAll()
    if(!bookData) {
      res.status(400).json({ message: "hello"});
    }
    res.status(200).json(bookData);
  } catch(err) {
    res.status(500).json(err);
  }
});

router.post('/books', async (req, res) => {
  try {
    const bookData = await Book.create(req.body);
    res.status(200).json(bookData);
  } catch(err) {
    res.status(500).json(err);
  }
});

router.delete('/books/:id', async (req, res) => {
  
});


module.exports = router;