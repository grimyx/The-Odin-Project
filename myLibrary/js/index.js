let myLibrary = [];

function Book(title, author, numOfPages, read) {
    this.title = title;
    this.author = author;
    this.pages = numOfPages;
    this.read = read;
    this.info = `${this.title}, writen by ${this.author}, ${this.pages} pages`;
}

const addBook = (book) => myLibrary.push(book);


const bookList = document.getElementById("bookList");
const addBtn = document.getElementById("addBtn");
const newBookForm = document.getElementById("newBookForm");

addBtn.onclick = () => {
    const title = document.getElementById("bookTitle").value;
    const author = document.getElementById("bookAuthor").value;
    const pages = document.getElementById("bookPages").value;
    const read = document.getElementById("readBook").checked;

    if (title === "") {
        alert("Please enter book title !");
    } else if (author === "") {
        alert("Please enter book author !");
    } else if (pages === "") {
        alert("Please enter number of book pages !")
    } else if(!Number.isFinite(Number(pages))) {
        alert("Number of pages must be number !!!");
    } else {
        addBook(new Book(title, author, pages, read));
        addToBookList(new Book(title, author, pages, read), myLibrary.length === 0 ? 0 : myLibrary.length - 1);
        
        document.getElementById("bookTitle").value = "";
        document.getElementById("bookAuthor").value = "";
        document.getElementById("bookPages").value = "";
        document.getElementById("readBook").checked = false;
        //console.log(myLibrary)
    }
}

const createNewBookEntry = (book,dataId) => {
    const container = document.createElement('div');
    container.id = `row${dataId}`;
    container.className = 'rows';

    const bookInfo = document.createElement("span");
    bookInfo.id = "bookInfo";
    bookInfo.innerText = book.info;

    const readOrNot = document.createElement("span");
    readOrNot.id = "readOrNot";
    readOrNot.innerText = "Read"

    const checkB = document.createElement("input")
    checkB.type = "checkbox"
    checkB.checked = book.read;
    checkB.addEventListener('click', () => {
        myLibrary[dataId].read = checkB.checked;
        updateStorage();
    })

    readOrNot.appendChild(checkB);

    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "-";
    deleteBtn.className = "deleteBtn";
    deleteBtn.addEventListener('click',(e) => {
        bookList.removeChild(document.getElementById(`row${dataId}`));
        myLibrary.splice(dataId,1);
        //console.log(myLibrary);
    })

    container.appendChild(bookInfo);
    container.appendChild(readOrNot);
    container.appendChild(deleteBtn);
    return container;
}

const addToBookList = (book, dataId) => {
    bookList.appendChild(createNewBookEntry(book, dataId));
    updateStorage();
}

const loadStorage = () => {
    if(localStorage.getItem("myLibrary")) {
        myLibrary = JSON.parse(localStorage.getItem("myLibrary"));
    }
}

const updateStorage = () => {
    localStorage.setItem("myLibrary", JSON.stringify(myLibrary));
}

loadStorage();
for(book in myLibrary) {
    addToBookList(myLibrary[book],book);    
}
