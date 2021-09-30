let papel = 0;
let priedra = 1;
let tijera = 2;
ppt(0);
function ppt (aux) {
    let random = getRandom(0, 3);
    if(random === aux ) {
        console.log("Empate");
    } else if (random === 0 && aux === 1 || random === 1 && aux === 0) {
        console.log("Gana papel");
    } else if (random === 1 && aux === 2 || random === 2 && aux === 1) {
        console.log("Gana piedra");
    } else if (random === 2 && aux === 0 || random === 0 && aux === 2) {
        console.log("Gana tijera");
    }
}
function getRandom(min, max) {
    return parseInt(Math.random() * (1+max-min) + min);
}