let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Book.prototype.summary = function() {
    if (this.read === true) {
        return `${this.title} by ${this.author} has ${this.pages} pages. You've read this book`;
    } else {
        return `${this.title} by ${this.author} has ${this.pages} pages. You haven't read this book`
    }
}

function addBookToLibrary() {
  // do stuff here
}