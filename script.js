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
        const el = document.createElement('div');
        el.classList.add("book");
        el.textContent = `Title: ${library[i].title}\n
                        Author: ${library[i].author}\n
                        Pages: ${library[i].pages}\n
                        Read: ${library[i].read}\n
                        Unique Id: ${library[i].uniqueId}`
        header.appendChild(el);

        const deleteBookBtn = document.createElement('button');
        deleteBookBtn.textContent = "Delete Book";
        deleteBookBtn.classList.add("delete");
        deleteBookBtn.setAttribute("data-id", library[i].uniqueId);
        el.appendChild(deleteBookBtn);

        deleteBookBtn.addEventListener('click', (e) => {
            const bookId = e.target.getAttribute('data-id');
            const bookIndex = library.findIndex(book => book.uniqueId === bookId);
            if (bookIndex !== -1) {
                library.splice(bookIndex, 1);
                header.removeChild(el);
            }
        });
    };
}

/*
const theQuietAmerican = new Book('The Quiet American', 'Graham Greene', 240, 'read');
const theWarofArt = new Book('The War of Art', 'Steven Pressfield', 165, 'read');
addBookToLibrary(theQuietAmerican);
addBookToLibrary(theWarofArt);
displayBook();
*/

/* Add New Book Button and Open Modal Functionality */

const newBookButton = document.createElement('button');
newBookButton.textContent = "Add New Book";
header.appendChild(newBookButton);

newBookButton.addEventListener('click', () => {
    dialog.showModal();
})

/* Dialog Functionality */

const dialog = document.querySelector('#dialog');
const form = document.querySelector('form');
const titleInput = document.querySelector('#title');
const authorInput = document.querySelector('#author');
const pagesInput = document.querySelector('#pages');
const readInput = document.querySelector('#read');
const addBookBtn = document.querySelector('.add-book');
const closeBtn = document.querySelector('.close-btn');

addBookBtn.addEventListener('click', (e) => {
    e.preventDefault();
const bookTitle = titleInput.value;
const bookAuthor = authorInput.value;
const bookPages = pagesInput.value;
const bookRead = readInput.value;
const newBook = new Book(bookTitle, bookAuthor, bookPages, bookRead)
addBookToLibrary(newBook);
displayBook();
form.reset();
});

closeBtn.addEventListener('click', () => {
    dialog.close();
});
