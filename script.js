let myLibrary = [];

function books(title, author, pages, isAlreadyRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isAlreadyRead = isAlreadyRead ? "Read already" : "Not read yet";
}

// The function resets the input field after the modal save button is clicked
function updateInputValues() {
  document.querySelector("#bookTitle").value = "";
  document.querySelector("#bookAuthor").value = "";
  document.querySelector("#noOfPages").value = "";
  document.querySelector("#isAlreadyRead").checked = false;
}

function removeCard() {}

function removeListener() {
  div
    .querySelectorAll(".removeBtn")
    .forEach((btn) =>
      btn.addEventListener("click", (e) =>
        console.log(e.target.parentNode.parentNode.remove())
      )
    );
}

let i = 0;

function AddNewBook() {
  let title = document.querySelector("#bookTitle").value;
  let author = document.querySelector("#bookAuthor").value;
  let pages = document.querySelector("#noOfPages").value;
  let isAlreadyRead = document.querySelector("#isAlreadyRead").checked;
  myLibrary[i++] = new books(title, author, pages, isAlreadyRead);
  updateInputValues();
  updateBookList(title, author, pages, isAlreadyRead);
}

let div = document.querySelector(".bookList");

function updateBookList(title, author, pages, isAlreadyRead) {
  div.innerHTML = "";
  for (let i = 0; i < myLibrary.length; i++) {
    div.innerHTML += `<div class="bookCard">
    <p>"${myLibrary[i].title}"</p>
    <p>By ${myLibrary[i].author}</p>
    <p>${myLibrary[i].pages} Pages</p>
    <div class="bookCardBtn">
      <button class="isReadBtn button addBtn">${myLibrary[i].isAlreadyRead}</button>
      <button class="removeBtn button addBtn">Remove</button>
    </div>
  </div>`;
  }
  removeListener();
}

document.querySelector(".modalSave").addEventListener("click", AddNewBook);

let copyRight = document.querySelector(".copyright");
let currentYear = new Date().getFullYear();
// console.log(currentYear);
copyRight.innerHTML = `<p>Copyright&nbsp;&nbsp;©&nbsp;&nbsp;Mahir Mosleh&nbsp;&nbsp;${currentYear}</p>`;
