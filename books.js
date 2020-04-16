let myLibrary = [{
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    pages: 295,
    read: true},
    {
    title: 'Harry Potter and the ',
    author: 'J.K. Rowling',
    pages: 618,
    read: false}];

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function() {
         return (title + ' by ' + author + ', ' + pages + ' pages, ' + read);
    }
}

let theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, 'read it' + '.');
let harryPotter = new Book('Harry Potter and the Goblet of Fire', 'J.K. Rowling', 618, 'not yet read' + '.');



//Put library elements into DOM
function showBooks(array) {
    for (i = 0; i < array.length; i++) {
        let title = array[i].title;
        let author = array[i].author;
        let pages = array[i].pages;
        let read = array[i].read;
        let table = document.querySelector('#booksTable');
        let bookRow = document.createElement('span');
        let rowTitle = document.createElement('span');
        let rowAuthor = document.createElement('span');
        let rowPages = document.createElement('span');
        let rowRead = document.createElement('span');
        let delButton = document.createElement('button');
        let dataTable = document.querySelector('#dataTable');

        rowTitle.innerText = title;
        rowTitle.classList.add('rowTitle');
        rowAuthor.innerText = author;
        rowAuthor.classList.add('rowAuthor');
        rowPages.innerText = pages;
        rowPages.classList.add('rowPages');
        rowRead.innerText = read;
        rowRead.classList.add('rowRead');
        bookRow.classList.add('bookRow');
        delButton.classList.add('delButton');
        delButton.setAttribute('id', 'del' +i); 
        delButton.textContent = 'X';


        bookRow.appendChild(rowTitle);
        bookRow.appendChild(rowAuthor);
        bookRow.appendChild(rowPages);
        bookRow.appendChild(rowRead);
        bookRow.appendChild(delButton);
        dataTable.appendChild(bookRow);
        table.appendChild(dataTable);
    }
}
showBooks(myLibrary);

let delButtons = document.querySelectorAll('.delButton');
    delButtons.forEach((btn) => btn.addEventListener('click', (event) => {
        let indexOfBtn = btn.id.slice(3);
        myLibrary.splice(indexOfBtn,indexOfBtn+1);
        let dataTable = document.querySelector('#dataTable');
        dataTable.innerHTML = '';
        showBooks(myLibrary);

    }));


function addBookToLibrary() {
    let inpTitle = document.querySelector('#title');
    let inpAuthor = document.querySelector('#author');
    let inpPages = document.querySelector('#pages');
    let inpRead = document.querySelector('#read');

    
    
}
let uplButton = document.querySelector('#upload');
    uplButton.addEventListener('click', (event) => {
        let body = document.querySelector('body')
        let inputForm = document.createElement('div');
        inputForm.setAttribute('id','inputForm');

        let titleLabel = document.createElement('label');
        titleLabel.textContent = 'Title:' 
        titleLabel.classList.add('inputLabels');
        let inpTitle = document.createElement('input');
        let authorLabel = document.createElement('label');
        authorLabel.classList.add('inputLabels');
        authorLabel.textContent = 'Author:';
        let inpAuthor = document.createElement('input');
        let pagesLabel = document.createElement('label');
        pagesLabel.classList.add('inputLabels');
        pagesLabel.textContent = 'Pages:';
        let inpPages = document.createElement('input');
        let readLabel = document.createElement('label');
        readLabel.classList.add('inputLabels');
        readLabel.textContent = 'Did you read it?';
        let inpRead = document.createElement('input');
        let submit = document.createElement('button');
        submit.setAttribute('id','submit');

        inputForm.appendChild(titleLabel);
        inputForm.appendChild(inpTitle);
        inputForm.appendChild(authorLabel);
        inputForm.appendChild(inpAuthor);
        inputForm.appendChild(pagesLabel);
        inputForm.appendChild(inpPages);
        inputForm.appendChild(readLabel);
        inputForm.appendChild(inpRead);
        inputForm.appendChild(submit);
        body.appendChild(inputForm);
    });


