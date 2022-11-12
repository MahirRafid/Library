let myLibrary = [];

function books(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
}

let copyRight = document.querySelector(".copyright");
let currentYear = new Date().getFullYear();
// console.log(currentYear);
copyRight.innerHTML = `<p>Copyright&nbsp;&nbsp;©&nbsp;&nbsp;Mahir Mosleh&nbsp;&nbsp;${currentYear}</p>`;
