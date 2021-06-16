let stars = document.querySelectorAll(".star");
let face = document.querySelector(".face");


setInterval(() =>
{
    let index = Math.floor(Math.random() * 6);
    stars[index].classList.toggle("shine");
}, 1000)

let msTime = 1000;
let nod = () =>
{
    setTimeout(() => {face.classList.remove("nod")}, 4000);
    face.classList.add("nod");
    msTime = Math.floor(Math.random() * 10000 + 4000);
    setTimeout(nod, msTime);
};
setTimeout(nod, msTime);