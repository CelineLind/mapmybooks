// Selectors
const bookInput = document.querySelector('.booksearch-input');
const searchButton = document.querySelector('.search-button');
const bookList = document.querySelector('.book-list-output');
var bookURL = "https://www.googleapis.com/books/v1/volumes?q=";

// Event Listeners
searchButton.addEventListener('click', searchForBooks);

// Functions
function searchForBooks(event){
    event.preventDefault(); // prevents the page refreshing on button click and form submitting

    // empty book list
    bookList.innerHTML = "";
    var userSearch = bookInput.value; // what they've searched

    // search for the book
    if (userSearch === " " || userSearch === null){
        // display an error if an empty search
    }
    else {
        // fetch data from bookURL + bookInput.value
        fetch(bookURL + userSearch)
            .then((res) => res.json())
            .then(data => console.log(data));
    }


    // // create todo div
    // const listDiv = document.createElement('div');
    // listDiv.classList.add('book');

    // // search for book according to bookInput text

    // // create li
    // const newBook = document.createElement('li');
    // newBook.innerText = bookInput.value; // around here is where the api code will be
    // newBook.classList.add('book-item');
    // listDiv.appendChild(newBook);

    // // append to list
    // bookList.appendChild(listDiv);

    // clear book title input value
    bookInput.value = "";
}