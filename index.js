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

