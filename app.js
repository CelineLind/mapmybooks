// Selectors
const bookInput = document.querySelector('.booksearch-input');
const searchButton = document.querySelector('.search-button');
const bookList = document.querySelector('.book-list-output');
var bookURL = "https://www.googleapis.com/books/v1/volumes?q=";

// Event Listeners
searchButton.addEventListener('click', displaySearch);

// Functions

async function displaySearch(event){
    event.preventDefault(); // prevents the page refreshing on button click and form submitting

    // empty book list
    bookList.innerHTML = "";
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

    // create todo div
    const listDiv = document.createElement('div');
    listDiv.classList.add('book');

    // display each search result to the screen
    // TODO: add the first 5 results to a table/div with a button to "view more/next"
    var newBook;
    objects.forEach(function(item){
        // create li
        // newBook = document.createElement('li');
        // newBook.innerText = item.volumeInfo.title;
        // newBook.classList.add('book-item');
        // listDiv.appendChild(newBook);

        // create div
        newBook = document.createElement('button');
        newBook.innerText = item.volumeInfo.title;
        newBook.classList.add('book-item');
        listDiv.appendChild(newBook);

        // append to list
        bookList.appendChild(listDiv);
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