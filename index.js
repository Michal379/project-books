// script
$(function(){
    $(".toggle").on("click", function(){
        if($(".menu").hasClass("active")){
            $(".menu").removeClass("active");
            $(this).find("a").html("<ion-icon name='menu'></ion-icon>");
        } else{
            $(".menu").addClass("active");
            $(this).find("a").html("<ion-icon name='close'></ion-icon>")
        }
    })
})

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


var modal = document.getElementById("myModal");
var img = document.getElementById("myBook");

// Get the modal content, header, and close button
var modalContent = modal.querySelector(".modal-content");
var modalHeader = modal.querySelector(".modal-header");
var closeButton = modal.querySelector(".close");

// When the user clicks the image, display the modal
img.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks the close button or outside the modal, close the modal
closeButton.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

document.addEventListener('DOMContentLoaded', () => {
    fetchBooks();
}) 
function fetchBooks(){
    fetch('http://localhost:3000/books')
    .then(resp => resp.json())
    .then(iterateBooks)
}
function iterateBooks(books){
    books.forEach(displayBooks)
}
function displayBooks(books){
    const editor= document.querySelector(".editors__choice")
    const free= document.querySelector(".free__books")
    const children= document.querySelector(".children__corner")
    const div1=document.createElement("div")
    div1.innerHTML= `
    <article class = "class-card">
    <img src = "${books.image}"></img>
    </article>
    `
    const div2 = document.createElement("div")
    div2.innerHTML= `
    <article class = "class-card">
    <img src = "${books.image}"></img>
    </article>
    `
    const div3 = document.createElement("div")
   div3.innerHTML= `
    <article class = "class-card">
    <img src = "${books.image}"></img>
    </article>
    `
editor.appendChild(div1)
free.appendChild(div2)
children.appendChild(div3)

}
fetch("https://www.googleapis.com/books/v1/volumes?q=harry+potter&callback=handleResponse")
.then(resp => resp.json())
.then(data => console.log(data))

