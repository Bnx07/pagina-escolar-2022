/* VARIABLES GLOBALES */

const logSect = document.getElementById("logSect");
const regSect = document.getElementById("regSect");
const logForm = document.getElementById("logForm");
const regForm = document.getElementById("regForm");

const logUser = document.getElementById("loginUser");
const logPass = document.getElementById("loginPass");
const regMail = document.getElementById("regisMail");
const regUser = document.getElementById("regisUser");
const regPass = document.getElementById("regisPass");
const regPas2 = document.getElementById("regisPas2");

const defaultFillZone = '<img src="../source/IMG/ETEC.jpg" alt="" class="etecIMG"><div class="fillZoneExtra"><p>Terminos y condiciones</p><p>Uso de cookies</p></div>';

let state = "reg";
let fillState = "fill";

/* LOCAL STORAGE */

console.log("EXISTO");
let getThisItem = localStorage.getItem('userList');
let userList = JSON.parse(getThisItem);
if (userList == null) {
    userList = [];
}
userListToJSON = JSON.stringify(userList);
localStorage.setItem("userList", userListToJSON);


/* FUNCIONES */

function swapState() {
    if (state == "login") {
        logSect.style.height = "0";
        logSect.style.display = "none";
        regSect.style.height = "fit-content";
        regSect.style.display = "flex";
        state = "reg";
    } else {
        regSect.style.height = "0";
        regSect.style.display = "none";
        logSect.style.height = "fit-content";
        logSect.style.display = "flex";
        state = "login";
    }
}

function errorP(id, idRemove, text) {
    document.getElementById(id).classList.add("errorClass");
    document.getElementById(id).innerHTML = text;
    document.getElementById(idRemove).classList.remove("errorClass");
    document.getElementById(idRemove).innerHTML = "";
}

function recoverPass() {
    document.getElementById("fillSect").innerHTML = '<img src="../source/IMG/ETEC.jpg" alt="" class="recoverEtecIMG"><h1 class="subtitulo">Recuperar contraseña</h1><div class="form"><input type="text" placeholder="Nombre de usuario" id="recoverName"><input type="text" placeholder="Dirección de mail" id="recoverMail"><button type="button" class="botonSecundario" onclick="returnFillZone()">Cancelar</button><button type="button" class="botonPrincipal" onclick="showPassword()">Buscar cuenta</button></div>'
}

function returnFillZone() {
    document.getElementById("fillSect").innerHTML = defaultFillZone;
}

function showPassword() {
    let getThisItem = localStorage.getItem('userList');
    let userList = JSON.parse(getThisItem);
    let found = false;
    userList.forEach(element => {
        if (element.user == document.getElementById("recoverName").value && element.email == document.getElementById("recoverMail").value) {
            found = true;
            document.getElementById("fillSect").innerHTML = `<h1 class="subtitulo">Recuperar contraseña</h1><div class="form"><input type="text" placeholder="Nombre de usuario" id="recoverName"><input type="text" placeholder="Dirección de mail" id="recoverMail"><button type="button" class="botonSecundario" onclick="returnFillZone()">Cancelar</button><button type="button" class="botonPrincipal" onclick="showPassword()">Buscar cuenta</button></div><div class="passwordDiv"><h3>Contraseña: </h3><div id="passwordReturn">${element.password}</div></div>`
        }
    });
    if (!found) {
        Swal.fire({
            icon: 'error',
            title: "Los datos son erroneos"
        });
    }
}

/* EVENT LISTENERS */

logForm.addEventListener("submit", (e) => {
    e.preventDefault();

    if (logUser.value.length < 4 || logPass.value.length < 4) {
        Swal.fire("Complete todos los datos");
    } else {
        let getThisItem = localStorage.getItem('userList');
        let userList = JSON.parse(getThisItem);
    
        let problem = "user";
        userList.forEach(element => {
            if (element.user == logUser.value){
                if (element.password == logPass.value) {
                    problem = "none";
                    window.location.replace("http://127.0.0.1:5500/index.html");
                } else {
                    problem = "pass";
                }
            }
        });
    
        if (problem == "user") {
            errorP("loginUserError", "loginPassError", "No se encuentra el usuario");
        } else if (problem == "pass") {
            errorP("loginPassError", "loginUserError", "La contraseña no coincide");
        } else {
            document.getElementById("loginPassError").classList.remove("errorClass");
            document.getElementById("loginPassError").innerHTML = "";
            document.getElementById("loginUserError").classList.remove("errorClass");
            document.getElementById("loginUserError").innerHTML = "";
        }
    }
});

regForm.addEventListener("submit", (e) => {
    e.preventDefault();

    if (regUser.value.length < 4 || regMail.value.length < 4 || regPass.value.length < 4) {
        Swal.fire("Complete todos los datos");
    } else {
        let getThisItem = localStorage.getItem('userList');
        let userList = JSON.parse(getThisItem);
        let valid = true;
    
        userList.forEach(element => {
            if (element.user == regUser.value) {
                valid = false;
                Swal.fire("Ya existe ese nombre de usuario");
            }
            if (element.mail == regMail.value) {
                valid = false;
                Swal.fire("Ya existe esa dirección de mail");
            }
        })
    
        if (regPass.value != regPas2.value) { //Verificacion de contraseñas
            valid = false;
            Swal.fire({
                icon: 'error',
                text:"Las contraseñas no coinciden"
            });
        }
    
        if (valid) {
            let nuevoUsuario = { //Creacion del objeto 
                user: regUser.value,
                password: regPass.value,
                email: regMail.value,
                notas: [],
                texto: "",
                color: []
            }

            userList.push(nuevoUsuario);
            userListToJSON = JSON.stringify(userList);           
            localStorage.setItem("userList", userListToJSON);

            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Se ha creado la cuenta',
                showConfirmButton: false,
                timer: 1500
              })
        }
    }
});

/* EJECUCIONES AL INICIAR */

swapState();