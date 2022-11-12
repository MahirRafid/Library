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

function setButtonColor() {
  div.querySelectorAll(".isReadBtn").forEach((btn) => {
    console.log(btn.textContent === "Not Read Yet");
    if (btn.textContent === "Not Read Yet")
      btn.classList.add("redColor", "redColor:hover");
  });
}

function toggleColor(btn) {
  if (btn.textContent === "Not Read Yet") {
    btn.textContent = "Already Read";
    btn.classList.remove("redColor", "redColor:hover");
  } else {
    btn.textContent = "Not Read Yet";
    btn.classList.add("redColor", "redColor:hover");
  }
}

function addBtnToggler() {
  div.querySelectorAll(".isReadBtn").forEach((btn) => {
    btn.addEventListener("click", (e) => toggleColor(btn));
  });
}

let div = document.querySelector(".bookList");

function updateBookList(title, author, pages, isAlreadyRead) {
  div.innerHTML += `<div class="bookCard">
    <p>"${title}"</p>
    <p>By ${author}</p>
    <p>${pages} Pages</p>
    <div class="bookCardBtn">
      <button class="isReadBtn isReadBtn:hover button addBtn">${
        isAlreadyRead ? "Already Read" : "Not Read Yet"
      }</button>
      <button class="removeBtn button addBtn">Remove</button>
    </div>
  </div>`;
  setButtonColor();
  addBtnToggler();
  removeListener();
}

document.querySelector(".modalSave").addEventListener("click", AddNewBook);

let copyRight = document.querySelector(".copyright");
let currentYear = new Date().getFullYear();
// console.log(currentYear);
copyRight.innerHTML = `<p>Copyright&nbsp;&nbsp;©&nbsp;&nbsp;Mahir Mosleh&nbsp;&nbsp;${currentYear}</p>`;
