let soldat_romain = document.getElementById("romain");
let soldat_fusil = document.getElementById("fusil");
let canvas = document.getElementById("c1");
let ctx = canvas.getContext("2d");
soldat_fusil.addEventListener('load', function(){
    ctx.drawImage(soldat_romain, 75, 50, 50, 75);
    ctx.drawImage(soldat_fusil, 250, 50, 50, 75);
})