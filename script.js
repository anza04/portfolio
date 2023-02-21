let uno = document.getElementById("uno");
let due = document.getElementById("due");
let tre = document.getElementById("tre");
let quattro = document.getElementById("quattro");
let cinque = document.getElementById("cinque");
let sei = document.getElementById("sei");
let title = document.getElementById("title");

title.addEventListener("mouseover", ()=>{
    uno.classList.add("active");
    due.classList.add("active");
    tre.classList.add("active");
    quattro.classList.add("active");
    cinque.classList.add("active");
    sei.classList.add("active");
})


title.addEventListener("mouseleave", ()=>{
    uno.classList.remove("active");
    due.classList.remove("active");
    tre.classList.remove("active");
    quattro.classList.remove("active");
    cinque.classList.remove("active");
    sei.classList.remove("active");
});
