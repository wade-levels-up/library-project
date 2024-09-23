const addBookBtn = document.querySelector('#add-book-btn');
const tbody = document.querySelector('tbody');

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

// Add initial book to library, log to console to verify it's there
const book1 = new Book('The Lord of the Rings', 'J.R.R Tolkien', 1216, 'on');
const book2 = new Book('Berserk - Volume:12', 'Kentaro Miura', 232, 'on');
myLibrary.push(book1);
myLibrary.push(book2);

function removeRefresh(index) {
    myLibrary.splice(index, 1);
    populateInitialTable(myLibrary);
}

function populateInitialTable(array) {

    tbody.innerHTML = ''; // I don't like this solution...

    for (i in array) {

        index = i;

        // For each item in our library make a row of cells to fill in
        let row = document.createElement('tr');
        let title = document.createElement('td');
        let author = document.createElement('td');
        let pages = document.createElement('td');
        let read = document.createElement('td');
        let remove = document.createElement('td');
        let removeBtn = document.createElement('button');

        // Fill in the cells from the object data
        title.textContent = array[i].title;
        author.textContent = array[i].author;
        pages.textContent = array[i].pages;
        if (array[i].read === 'on') {
            read.textContent = 'yes';
        } else {
            read.textContent = 'no'
        }
        
        removeBtn.textContent = 'X';
        removeBtn.setAttribute('onclick', `removeRefresh(${i})`);

        // Add filled in elements into the table body
        tbody.appendChild(row);
        row.appendChild(title);
        row.appendChild(author);
        row.appendChild(pages);
        row.appendChild(read);
        row.appendChild(remove);
        remove.appendChild(removeBtn);
    }
}

populateInitialTable(myLibrary);
console.table(myLibrary);

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('new-book-form');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const formData = new FormData(form);
        const title = formData.get('input-title');
        const author = formData.get('input-author');
        const pages = formData.get('input-pages');
        const read = formData.get('input-read');

        let newBook = new Book(title, author, pages, read);
        myLibrary.push(newBook);
        populateInitialTable(myLibrary);       
    });
});

function addBookToLibrary() {

}
