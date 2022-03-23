let text = document.getElementById("scroll-text");
text.innerHTML = text.innerText.split("").map(
    (char, i) =>
        `<span style="transform:rotate(${i * 20}deg)">${char}</span>`
).join("");
// console.log(text);

// Hamburger menubar

const hamicon = document.getElementsByClassName('hamburgerMenu')[0];
const navElement = document.getElementsByClassName('nav-element')[0]
const cross = document.getElementsByClassName('cross_x')[0];
console.log(cross);

hamicon.addEventListener('click', function () {
    navElement.classList.toggle('active')
    hamicon.classList.toggle('active')


    console.log("hola");
})

cross.addEventListener('click', function () {
    navElement.classList.toggle('active')
    hamicon.classList.toggle('active')
    console.log("hello")
})