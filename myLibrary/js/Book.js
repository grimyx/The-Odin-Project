let myLibrary = [];

export function Book(title,author,numOfPages,read) {
    this.title = title;
    this.author = author;
    this.pages = numOfPages;
    this.read = read;
    this.info = function() {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read ? 'read' : 'not read yet'}`
    };
}

const addBook = (book) => myLibrary.push(book);


//export {Book, addBook}