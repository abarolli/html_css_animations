
document.body.addEventListener("mousemove", pupilTrackMouse);


let pupils = document.getElementById("pupils");


let pupilsX = (pupils.getBoundingClientRect().right + pupils.getBoundingClientRect().left) / 2;
function pupilTrackMouse(e) {
    let pupilsY = (pupils.getBoundingClientRect().top + pupils.getBoundingClientRect().bottom) / 2;
    let x = e.clientX - pupilsX;
    let y = e.clientY - pupilsY;

    let hypotenuse = Math.sqrt((x * x) + (y * y))
    x *= ((hypotenuse != 0) ? (3 / (hypotenuse)) : 0);
    y *= ((hypotenuse != 0) ? (3 / (hypotenuse)) : 0);

    pupils.style.transform = `translate(${x}px, ${y}px)`;
}