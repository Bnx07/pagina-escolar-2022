/* VARIABLES GLOBALES */

const diagTrig = document.getElementById("diagTrig");
const eje1Trig = document.getElementById("eje1Trig");
const eje2Trig = document.getElementById("eje2Trig");
const trabTrig = document.getElementById("trabTrig");

const diagSect = document.getElementById("diagSect");
const eje1Sect = document.getElementById("eje1Sect");
const eje2Sect = document.getElementById("eje2Sect");
const trabSect = document.getElementById("trabSect");
const inactive = document.getElementById("inactive")

/* FUNCIONES */

function checkTarea(numero) {
    let boton = document.getElementsByClassName("tarea-button");
    if (boton[numero].value == "porhacer") {
        boton[numero].classList.add("hecho");
        boton[numero].value = "hecho";
        boton[numero].innerHTML = "Hecho";
    } else {
        boton[numero].classList.remove("hecho");
        boton[numero].value = "porhacer";
        boton[numero].innerHTML = "Incompleto";
    }
}

function deployTeoria(numero) {
    let displayTeoria = document.getElementsByClassName("teoria");
    let teoriaDesplegada = document.getElementsByClassName("teoriaExpand");
    if (displayTeoria[numero].value == "hidden") {
        teoriaDesplegada[numero].style.display = "block";
        displayTeoria[numero].value = "show";
    } else {
        teoriaDesplegada[numero].style.display = "none";
        displayTeoria[numero].value = "hidden";
    }
}

function deployTarea(numero) {
    let displayTarea = document.getElementsByClassName("tarea");
    let tareaDesplegada = document.getElementsByClassName("tareaExpand");
    if (displayTarea[numero].value == "hidden") {
        tareaDesplegada[numero].style.display = "block";
        displayTarea[numero].value = "show";
    } else {
        tareaDesplegada[numero].style.display = "none";
        displayTarea[numero].value = "hidden";
    }
}

function closeTarea(numero) {
    let displayTarea = document.getElementsByClassName("tarea");
    let tareaDesplegada = document.getElementsByClassName("tareaExpand");
    tareaDesplegada[numero].style.display = "none";
    displayTarea[numero].value = "hidden";
}

function controleSection(before, then, entry, leave) { // IF NOT INCLUDED
    then.classList.add(entry); // ANIMACION DE ENTRADA

    before.classList.add(leave); // ANIMACION DE SALIDA
    before.classList.add("controle"); // POSITION MARGINTOP Y TOP EN CLASE
    
    setTimeout(() => {
        before.style.display = "none";
        then.classList.remove(entry); // ANIMACION DE ENTRADA

        before.classList.remove(leave); // ANIMACION DE SALIDA
        before.classList.remove("controle"); // POSITION MARGINTOP Y TOP EN CLASE

        if (diagSect.style.display != "flex" && eje1Sect.style.display != "flex" && eje2Sect.style.display != "flex" && trabSect.style.display != "flex") {
            inactive.style.display = "block";
        }
    }, 450)    
}

/* EVENT LISTENERS */

diagTrig.addEventListener("mouseover", (event) => {
    inactive.style.display = "none";
    diagSect.style.display = "flex";

    if (eje1Sect.style.display == "flex") {
        controleSection(eje1Sect, diagSect, 'animate__fadeInLeftBig', 'animate__fadeOutRightBig');
    } else if (eje2Sect.style.display == "flex") {
        controleSection(eje2Sect, diagSect, 'animate__fadeInLeftBig', 'animate__fadeOutRightBig')
    } else if (trabSect.style.display == "flex") {
        controleSection(trabSect, diagSect, 'animate__fadeInLeftBig', 'animate__fadeOutRightBig');
    }
}, false);

eje1Trig.addEventListener("mouseover", (event) => {
    inactive.style.display = "none";
    eje1Sect.style.display = "flex";

    if (diagSect.style.display == "flex") {
        controleSection(diagSect, eje1Sect, 'animate__fadeInRightBig', 'animate__fadeOutLeftBig');
    } else if (eje2Sect.style.display == "flex") {
        controleSection(eje2Sect, eje1Sect, 'animate__fadeInLeftBig', 'animate__fadeOutRightBig')
    } else if (trabSect.style.display == "flex") {
        controleSection(trabSect, eje1Sect, 'animate__fadeInLeftBig', 'animate__fadeOutRightBig');
    }
}, false);

eje2Trig.addEventListener("mouseover", (event) => {
    inactive.style.display = "none";
    eje2Sect.style.display = "flex";

    if (diagSect.style.display == "flex") {
        controleSection(diagSect, eje2Sect, 'animate__fadeInRightBig', 'animate__fadeOutLeftBig');
    } else if (eje1Sect.style.display == "flex") {
        controleSection(eje1Sect, eje2Sect, 'animate__fadeInRightBig', 'animate__fadeOutLeftBig')
    } else if (trabSect.style.display == "flex") {
        controleSection(trabSect, eje2Sect, 'animate__fadeInLeftBig', 'animate__fadeOutRightBig');
    }
});

trabTrig.addEventListener("mouseover", (event) => {
    inactive.style.display = "none";
    trabSect.style.display = "flex";

    if (diagSect.style.display == "flex") {
        controleSection(diagSect, trabSect, 'animate__fadeInRightBig', 'animate__fadeOutLeftBig');
    } else if (eje1Sect.style.display == "flex") {
        controleSection(eje1Sect, trabSect, 'animate__fadeInRightBig', 'animate__fadeOutLeftBig')
    } else if (eje2Sect.style.display == "flex") {
        controleSection(eje2Sect, trabSect, 'animate__fadeInRightBig', 'animate__fadeOutLeftBig');
    }
}); 
