// Selectors
const bookInput = document.querySelector('.booksearch-input');
const searchButton = document.querySelector('.search-button');
const bookList = document.querySelector('.book-list-output');

// Event Listeners
searchButton.addEventListener('click', searchForBooks);

// Functions
function searchForBooks(event){
    event.preventDefault(); // prevents the page refreshing on button click and form submitting

    // create todo div
    const listDiv = document.createElement('div');
    listDiv.classList.add('book');

    // create li
    const newBook = document.createElement('li');
    newBook.innerText = bookInput.value;
    newBook.classList.add('book-item');
    listDiv.appendChild(newBook);

    // append to list
    bookList.appendChild(listDiv);

    // clear todo input value
    bookInput.value = "";
}