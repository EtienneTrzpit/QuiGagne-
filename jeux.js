function pb(){
    let canvas = document.getElementById("c1");
    let ctx = canvas.getContext("2d");
    ctx.drawImage(soldat_romain, 75, 50, 50, 75);
}
let soldat_romain = document.getElementById("romain");
let soldat_fusil = document.getElementById("fusil");
setTimeout(pb, 10000);


