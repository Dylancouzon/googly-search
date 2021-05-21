let mongoose = require('mongoose');
let db = require('../models');

mongoose.connect('mongodb://localhost/google-books', {
  useNewUrlParser: true,
  useFindAndModify: false
});

let bookSeed = [
  {
    name: "The Hunger Games",
    author: "Suzanne Collins",
    publishedDate: "5/5/2020",
    description: "Set in a dark vision of the near future",
    image: "http://books.google.com/books/content?id=sazytgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    link: "http://books.google.com/books?id=sazytgAACAAJ&dq=title:The+Hunger+Games&hl=&source=gbs_api"
  }
]

db.Book.deleteMany({})
  .then(() => db.Book.collection.insertMany(bookSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });