
let button = document.querySelector("#button");

let randomHexNumber = () => {
    let hex = '0123456789ABCDEF';
    let hash = "#";

    for(let i = 0; i < 6; i++) {

         hash = hash + hex[Math.floor(Math.random() * 16)]
        }
        return hash;
        
}

let colorChanger = () => {
    document.querySelector("#canvas").style.backgroundColor = randomHexNumber();
};

button.addEventListener("click", colorChanger);

 