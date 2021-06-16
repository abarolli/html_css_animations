let wing = document.querySelector("#wing");

let flapWing = () => {
    
    setTimeout(() => {wing.classList.remove("flap-wing")}, 1700);
    wing.classList.toggle("flap-wing");
    let msTime = Math.floor(Math.random() * 8000 + 2000)
    setTimeout(flapWing, msTime);
};

flapWing();