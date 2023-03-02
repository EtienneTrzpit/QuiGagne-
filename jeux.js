    let soldat_romain = document.getElementById("romain");
    let soldat_fusil = document.getElementById("fusil");
    let fleche_gauche = document.getElementById("gauche");
    let fleche_droite = document.getElementById("droite");
    let canvas = document.getElementById("c1");
    let ctx = canvas.getContext("2d");
    ctx.drawImage(soldat_romain, 30, 30, 25, 50);
    ctx.drawImage(soldat_fusil, 90, 30, 25, 50);
    ctx.drawImage(fleche_droite, 0, 30, 25, 50);
    ctx.drawImage(fleche_gauche, 150, 30, 25, 50);

