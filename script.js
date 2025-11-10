let header = document.querySelector(".header")

const library = [];

function Book(title, author, pages, read, uniqueId) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.uniqueId = crypto.randomUUID()
    this.info = function() {
        return `${title} by ${author}, ${pages} pages, ${read}, ${uniqueId}`
    }
    };

function addBookToLibrary(book) {
    library.push(book);
}

function displayBook() {
    for (let i = 0; i < library.length; i++) {
    let el = document.createElement("div");
    el.classList.add("book");
    el.textContent = `Title: ${library[i].title}\n
                    Author: ${library[i].author}\n
                    Pages: ${library[i].pages}\n
                    Read: ${library[i].read}\n
                    Unique Id: ${library[i].uniqueId}`
    header.appendChild(el);
    };
}


const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, 'not read yet');

addBookToLibrary(theHobbit);
displayBook();