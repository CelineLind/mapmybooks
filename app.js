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

    var newBook;
    objects.forEach(function(item){
        console.log(item.volumeInfo.title);

        // create li
        newBook = document.createElement('li');
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

// function addToDiv(objects){
//     var newBook = document.createElement('li');
//     objects.forEach(function(item){
//         console.log(item.volumeInfo.title);

//         // create li
//         newBook = document.createElement('li');
//         newBook.innerText = item.volumeInfo.title;
//         newBook.classList.add('book-item');
//         listDiv.appendChild(newBook);

//         // append to list
//         bookList.appendChild(listDiv);
//     }
//     );
// }

// fetches the book details
function searchForBooks(userSearch){
    console.log(bookURL + 'intitle:' + userSearch);
    // fetch data from bookURL + bookInput.value
    return fetch(bookURL + 'intitle:' + userSearch)
        .then((res) => res.json())
        .then((responseJson) => {return responseJson});
}