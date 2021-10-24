// Selectors
const bookInput = document.querySelector('.booksearch-input');
const searchButton = document.querySelector('.search-button');
const bookSearchList = document.querySelector('.book-search-output');
const bookOutputList = document.querySelector('.book-list-output');
var bookURL = "https://www.googleapis.com/books/v1/volumes?q=";

// Event Listeners
searchButton.addEventListener('click', displaySearch);
bookSearchList.addEventListener('click', addToBookList);

// Functions
async function displaySearch(event){
    event.preventDefault(); // prevents the page refreshing on button click and form submitting

    // empty book list
    bookSearchList.innerHTML = "";
    var userSearch = bookInput.value; // what they've searched
    var results;
    var objects;

    // search for the book
    if (userSearch === " " || userSearch === null){
        // display an error if an empty search
    }
    else {
        results = await searchForBooks(userSearch);
        objects = results.items;
    }

    // create list div
    const listDiv = document.createElement('div');
    listDiv.classList.add('book-search');

    // display the search results as buttons (todo: style like a drop down)
    var newBook;
    objects.forEach(function(item){

        // create div
        newBook = document.createElement('button');
        newBook.innerText = item.volumeInfo.title;
        newBook.classList.add('book-search-item');
        listDiv.appendChild(newBook);

        // append to list
        bookSearchList.appendChild(listDiv);
    }
    );

    // clear book title input value
    bookInput.value = "";
}

// fetches the book details
function searchForBooks(userSearch){
    // https://developers.google.com/books/docs/v1/using?authuser=2#WorkingVolumes
    // https://stackoverflow.com/questions/11375173/google-books-api-returns-only-10-results
    console.log(bookURL + 'intitle:' + userSearch); // displays first 10 at the moment, add button that displays next ten, etc
    // fetch data from bookURL + bookInput.value
    return fetch(bookURL + 'intitle:' + userSearch)
        .then((res) => res.json())
        .then((responseJson) => {return responseJson});
}

function addToBookList(event){
    const item = event.target;

    console.log("item:");
    console.log(item.innerText);

    // create div
    const outputDiv = document.createElement('div');
    outputDiv.classList.add('book-list');

    // create div
    const newBook = document.createElement('li');
    newBook.innerText = item.innerText;
    newBook.classList.add('book-output-item');
    outputDiv.appendChild(newBook);

    // append to list
    bookSearchList.appendChild(outputDiv);
}