const router = require('express').Router();
const Book = require('../../models/Book');

router.get('/books', (req, res) => {
  // console.log("hello")
  Book.find({})
    .then(bookData => {
      res.status(200).json(bookData);
    })
    .catch(err => {
      res.status(500).json(err)
    })
});

router.post('/books', (req, res) => {

  Book.create(req.body)
    .then(bookData => {
      res.status(200).json(bookData);
    })
    .catch(err => {
      console.log(err)
      res.status(500).json(err)
    })
});

router.delete('/books/:id', async (req, res) => {

});


module.exports = router;