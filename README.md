[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)<br>

# Google-Books-Search

Our application leverages Google Books API to bring back the most important content from your favorite books. You can then save them into your own collection so you can reference them later.

![google-books-search](./client/assets/images/google-books-search.gif)

## Technology

<img align="left" alt="html" width="25x" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png"/> &nbsp;
<img align="left" alt="css" width="25x" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png"/> &nbsp;
<img align="left" alt="javascript" width="25x" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png"/> &nbsp;
<img align="left" alt="react" width="25x" src="./client/assets/images/logo192.png"/> &nbsp;
<img align="left" alt="react bootstrap" width="25x" src="./client/assets/images/react-bootstrap.svg"/> &nbsp;
<img align="left" alt="bootstrap" width="25x" src="https://camo.githubusercontent.com/bec2c92468d081617cb3145a8f3d8103e268bca400f6169c3a68dc66e05c971e/68747470733a2f2f76352e676574626f6f7473747261702e636f6d2f646f63732f352e302f6173736574732f6272616e642f626f6f7473747261702d6c6f676f2d736861646f772e706e67"/> &nbsp;
<img align="left" alt="atlas-mongoDB" width="25px" src="./client/assets/images/atlas-mongoDB-1.png"/> &nbsp;
<img align="left" alt="mongoose" width="25px" src="./client/assets/images/mongoose.png"/> &nbsp;
<img align="left" alt="Node.js" width="25px" src="https://cdn.iconscout.com/icon/free/png-512/node-js-1174925.png"/> &nbsp;
<img align="left" alt="SQL" width="25px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/npm/npm.png"/> &nbsp;
<img align="left" alt="express" width="25px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/express/express.png"/> &nbsp;
<img align="left" alt="SQL" width="25px" src="https://raw.githubusercontent.com/motdotla/dotenv/master/dotenv.png"/> &nbsp;
<img align="left" alt="JavaScript" width="25x" src="https://cdn.iconscout.com/icon/free/png-512/heroku-5-569467.png"/> &nbsp;

<br><br>

Here are the technologies and tools used to build this application.

- HTML
- CSS
- JavaScript
- [Bootstrap](https://getbootstrap.com/)
- [React](https://reactjs.org/)
    - [react-bootstrap](https://react-bootstrap.github.io/)
- [Node.js](https://nodejs.org/en/)
- [npm](https://www.npmjs.com/) packages
    - [axios](https://www.npmjs.com/package/axios)
    - [express](https://www.npmjs.com/package/express)
    - [if-env](https://www.npmjs.com/package/if-env)
    - [mongoose](https://www.npmjs.com/package/mongoose)

- [HEROKU](https://www.heroku.com/)
- [Atlas mongoDB](https://www.mongodb.com/)


## Usage & Features

**Google Books API**
When calling on the `API.getBooks` we deconstructed the json response so later on downstream in our code it is easier to handle. If you look at about the middle section of the code snippet below you can see where we push in the deconstructed object into **newData**. Inside the object contains; *name, author, publishedDate, description, image, link*.

```API.getBooks deconstuction
<!-- json deconstruction -->

  handleSearchbutton = () => {
  API.getBooks(this.state.search)
  .then(res => {
    const newData = [];
    console.log(res);
    res.data.items.forEach((book)=>{
      let imageURL;
      if(book.volumeInfo.imageLinks){
        imageURL = book.volumeInfo.imageLinks.thumbnail;
      }else{
        imageURL = "";
      }
      newData.push({
            name: book.volumeInfo.title,
            author: book.volumeInfo.authors[0],
            publishedDate: book.volumeInfo.publishedDate,
            description:book.volumeInfo.description,
            image: imageURL,
            link: book.selfLink
      });
    });
    this.setState({ books: newData })
  });
}
```

Here is a snippet of what the **Google Books API** response looks like before we deconstruct it.

![api-google-books](./client/assets/images/api-google-books-response.PNG)

## License

MIT License

Copyright (c) 2021 Jake Novelli, Cheng Tang, Liam Stewart, and Dylan Couzon

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


## Future Development


## Contact Us

Please feel free to reach out to us or checkout our other individual works.

Jake Novelli
- [jakenovelli11@gmail.com](mailtp:jakenovelli11@gmail.com)
- [GitHub](https://github.com/dnovelli1)
- [LinkedIn](https://www.linkedin.com/in/david-jacob-novelli/)

Dylan Couzon
- [dylancouzon@gmail.com](mailto:dylancouzon@gmail.com)
- [GitHub](https://github.com/Dylancouzon)
- [LinkedIn](https://www.linkedin.com/in/dcouzon/)

Liam Stewart
- [liamchristopher.media@gmail.com](mailto:liamchristopher.media@gmail.com)
- [GitHub](https://github.com/LiamStewart8)
- [LinkedIn](https://www.linkedin.com/in/liamsctewart/)

Cheng Tang
- [cheng21tang@gmail.com](mailto:cheng21tang@gmail.com)
- [GitHub](https://github.com/cheng21tang)
- [LinkedIn](https://www.linkedin.com/in/cheng21tang/)
