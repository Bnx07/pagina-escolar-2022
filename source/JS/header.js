/* VARIABLES GLOBALES */

const displayer = document.getElementById("displayer");
let show = "none"

let getData = sessionStorage.getItem("user");
let getDataToJson;
if (getData == null) {
    getDataToJson = {
        user: "Inicie sesión",
        password: "Inicie sesión",
        texto = ""
    }
} else {
    getDataToJson = JSON.parse(getData);
}

// getLS {}

/* FUNCIONES */

function userTrig() { // FUNCIONA
    if (show === "user") {
        displayer.innerHTML = '';
        
        show = "none";
    } else if (show != "user") {
        if (getData != null) {
            displayer.innerHTML = '<nav class="usernav"><div class="usernav-datazone"><p>'+getDataToJson.user+'</p><i class="fa-solid fa-x" onclick="userTrig()"></i></div><p onclick="cerrarSesion()">Cerrar sesión <i class="fa-solid fa-right-from-bracket"></i></p></nav>';
        } else {
            displayer.innerHTML = '<nav class="usernav"><div class="usernav-datazone"><a href="/pagina-escolar-2022/templates/loginV4.1.html" style="color: black;">'+getDataToJson.user+'</a><i class="fa-solid fa-x" onclick="userTrig()"></i></div></nav>';
        }
        show = "user";
    }
}

function cerrarSesion() { // FUNCIONA
    window.location.href = "/pagina-escolar-2022/templates/login.html";
    sessionStorage.clear();
}

function notiTrig() { // FUNCIONA
    if (show === "notif") {
        displayer.innerHTML = '';
        show = "none";
    } else {
        displayer.innerHTML = '<nav class="extranav"><div class="extranav-topzone"><p class="extranav-title">Notificaciones</p><i class="fa-solid fa-x extranav-close" onclick="notiTrig()"></i></div><div class="extranav-extras"><div><i class="fa-solid fa-check"></i><a href="/pagina-escolar-2022/templates/materia.html">La tarea se ha entregado con éxito</a></div><div><i class="fa-solid fa-lightbulb"></i><a href="/pagina-escolar-2022/templates/materia.html">Tienes tareas pendientes</a></div></div></nav>';
        show = "notif";
    }
}

function califica() { // FUNCIONA
    window.open("https://app.colegium.cloud/alumno/seguimiento", '_blank');
}

function noteTrig() { // A MEDIAS
    if (show === "notif") {
        displayer.innerHTML = '';
        show = "none";
    } else {
        displayer.innerHTML = '<nav class="notenav"><div class="extranav-topzone"><p class="extranav-title">Notas</p><i class="fa-solid fa-x extranav-close" onclick="noteTrig()"></i></div><div id="notenav-notes"><div class="notenav-notes-note"><p class="note-content">Guardar notas en LS</p><i class="fa-solid fa-trash-can" onclick="deleteNote(0)"></i></div><div class="notenav-notes-note"><p class="note-content">Hacer modificable con LS</p><i class="fa-solid fa-trash-can" onclick="deleteNote(1)"></i></div><div class="notenav-notes-note"><p class="note-content">Hacer diseño folder</p><i class="fa-solid fa-trash-can" onclick="deleteNote(2)"></i></div></div><button id="notenav-add" onclick="addNote()">Añadir nota</button></nav>';
        show = "notif";
    }

    
    // Get LS y busque un nombre igual al del SS, que lea las notas y las aplique
}

function addNote() { // FUNCIONA
    displayer.innerHTML += '<div id="newNote"><center><h3 class="newNote-title">Nueva nota</h3></center><hr><center><textarea id="newNote-input" rows="2" placeholder="Finalizar tarea de programacion"></textarea></center><div class="extranav-divButtons"><button class="extranav-divButtons-save" onclick="saveNewNote()">Guardar</button><button class="extranav-divButtons-cancel" onclick="cancelNewNote()">Cancelar</button></div></div>'
}

function saveNewNote() { // INCOMPLETO NO VA A LS
    var newNote = document.getElementById("newNote-input").value;
    var newNoteSect = document.getElementById("newNote");
    displayer.removeChild(newNoteSect);
    document.getElementById("notenav-notes").innerHTML += '<div class="notenav-notes-note"><p class="note-content">' + newNote + '</p><i class="fa-solid fa-trash-can" onclick="deleteNote(' + document.getElementsByClassName("note-content").length + ')"></i></div>';
}

function cancelNewNote() { // FUNCIONA
    var newNoteSect = document.getElementById("newNote");
    displayer.removeChild(newNoteSect);
}

function deleteNote(numero) { // NO FUNCIONA Y ESTA ROTO
    let noteNavNotes = document.getElementById("notenav-notes");
    console.log(typeof(numero));
    let nota = document.getElementsByClassName[numero];
    noteNavNotes.removeChild(nota);
}

function markTrig() { // FUNCIONA
    if (show === "marked") {
        displayer.innerHTML = '';
        show = "none";
    } else {
        displayer.innerHTML = '<nav class="extranav"><div class="extranav-topzone"><p class="extranav-title">Guardados</p><i class="fa-solid fa-x extranav-close" onclick="markTrig()"></i></div><div class="extranav-extras"><div><i class="fa-solid fa-star"></i><a href="/pagina-escolar-2022/templates/materia.html">Teoría 10/8</a></div><div><i class="fa-solid fa-star"></i><a href="/pagina-escolar-2022/templates/materia.html">Página ETecVirtual</a></div></div></nav>';
        show = "marked";
    }
}

function chatTrig() { // FUNCIONA
    if (show === "chat") {
        displayer.innerHTML = '';
        show = "none";
    } else {
        displayer.innerHTML = '<div class="chatnav"><div class="extranav-topzone"><p>Chats</p><i onclick="chatTrig()" class="fa-solid fa-x"></i></div><div class="chatnav-recent"><div class="chatnav-recent-user chatnav-recent-active"><i class="fa-solid fa-circle-user"></i><p>Bruno Pontiz</p></div><div class="chatnav-recent-user"><i class="fa-solid fa-circle-user"></i><p>Silvia Curadelli</p></div></div><div class="chatnav-chat"><div class="chatnav-chat-my"><p class="chatnav-chat-my-border">Hola, buenos dias</p></div><div class="chatnav-chat-other"><p class="chatnav-chat-other-border">Hola, buenas tardes</p></div><div class="chatnav-chat-my"><p class="chatnav-chat-my-border">Quería preguntar por la tarea de display</p></div></div><div id="chatnav-chat-send"><input type="text" placeholder="Ingrese el texto" id="chatnav-chat-send-input"><i class="fa-solid fa-share"></i></div></div>';
        show = "chat";
    }
}

function foldTrig() { // FUNCIONA
    if (show === "folder") {
        displayer.innerHTML = '';
        show = "none";
    } else {
        displayer.innerHTML = '<nav class="extranav"><div class="extranav-topzone"><p>Guarda tus archivos aqui</p><i class="fa-solid fa-x" onclick="foldTrig()"></i></div><div class="foldernav-folder"><p>Suelta los archivos para dejarlos</p></div></nav>';
        show = "folder";
    }
}

function modifyHeaderSquare() { // FUNCIONA
    displayer.innerHTML = '<div id="modificable-input-zone"><h3 class="modificable-title">Modificar zona superior</h3><center><textarea id="modificable-input" rows="2" placeholder="Finalizar tarea de programacion"></textarea></center><div class="extranav-divButtons"><button class="extranav-divButtons-save" onclick="saveHeaderSquare()">Guardar</button><button class="extranav-divButtons-cancel" onclick="cancelHeaderSquare()">Cancelar</button></div</div>';
}

function saveHeaderSquare() { // INCOMPLETO
    let texto = document.getElementById("modificable-input").value;
    if (texto.length > 0) {
        if (texto.length < 70) {
            document.getElementById("modificable-texto").innerHTML = texto;

            getLS = localStorage.getItem("userList");
            getLSToJSON = JSON.parse(getLS);

            getLSToJSON.forEach(element => {
                if (element.user == getDataToJson.user) {
                    element.texto = texto;
                }
            
            userListToJSON = JSON.stringify(getLSToJSON);           
            localStorage.setItem("userList", userListToJSON);
            });

            // BUSCAR EL PERFIL EN EL LS Y CREAR EL COSO

            displayer.innerHTML = "";
        } else {
            Swal.fire({
                icon: 'error',
                title: 'El texto es demasiado largo',
            })
        }
    }
}

function cancelHeaderSquare() { // FUNCIONA
    displayer.innerHTML = "";
}

function readHeaderSquare() { // FUNCIONA
    getLS = localStorage.getItem("userList");
    getLSToJSON = JSON.parse(getLS);

    getLSToJSON.forEach(element => {
        if (element.user == getDataToJson.user) {
            document.getElementById("modificable-texto").innerHTML = element.texto;
        }
    });
    // Get LS y busque un nombre igual al del SS, que lea el centro y lo cambie
    // document.getElementById("modificable-texto").innerHTML = texto;
}

/* EJECUCION AL COMIENZO */

readHeaderSquare()
