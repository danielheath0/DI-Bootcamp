const allBooks = [];

const book1 = {
  title: "The Fountainhead",
  author: "Ayn Rand",
  image:
    "https://static.wikia.nocookie.net/the-stone-quarry/images/c/c1/The_Fountainhead_cover.jpg/revision/latest?cb=20221112041056",
  alreadyRead: true,
};

const book2 = {
  title: "The Cat in the Hat",
  author: "Dr Seuss",
  image:
    "https://static.wikia.nocookie.net/seuss/images/b/b7/Cat_page_logo.jpg/revision/latest/thumbnail/width/360/height/450?cb=20120527060656",
  alreadyRead: false,
};

allBooks.push(book1)
allBooks.push(book2)

const listBooks = document.getElementsByClassName('allBooks')

const newDiv = document.createElement('div')

listBooks.appendChild(newDiv)