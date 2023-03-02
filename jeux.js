    let soldat_romain = document.getElementById("romain");
    let soldat_fusil = document.getElementById("fusil");
    let fleche_gauche = document.getElementById("gauche");
    let fleche_droite = document.getElementById("droite");
    let canvas = document.getElementById("c1");
    let ctx = canvas.getContext("2d");
    ctx.drawImage(soldat_romain, 50, 50, 50, 75);
    ctx.drawImage(soldat_fusil, 125, 50, 50, 75);
    ctx.drawImage(gauche, 0, 50, 50, 75);
    ctx.drawImage(droite, 200, 50, 50, 75);

