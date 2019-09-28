var contactos = [
    {
        nombre: "Macarena Poo García",
        empresa: "Retail Zipline",
        email: "macarenapoo@gmail.com",
        telefono: "5556801216"
    },
    {
        nombre: "Juan Fernando Donoso",
        empresa: "Universidad Iberoamericana",
        email: "juan.donoso@uia.mx",
        telefono: "5555555555"
    }
];
function abrir() {
    var modal = document.getElementById("modal").style.display = "flex";
}
function cerrar() {
    var modal = document.getElementById("modal").style.display = "none";
}
function imprimirContacto(contacto, index) {
    var addContacto = document.getElementById("contactos");
    addContacto.insertAdjacentHTML('beforeend',
        `<li class="contacto">
        <div class="actions">
            <a><i onclick="eliminarContacto(`+ index + `)" class="fa fa-trash"></i></a>
        </div>
        <i class="userIcon fa fa-user"></i>
        <h4 class="nombre">`+ contacto.nombre + `</h4>
        <div class="datos">
            <div class="dato">
                <i class="fa fa-building"></i>
                <span>`+ contacto.empresa + `</span>
            </div>
            <div class="dato">
                <i class="fa fa-envelope"></i>
                <a href="mailto:analopez@gmail.com">`+ contacto.email + `</a>
            </div>
            <div class="dato">
                <i class="fa fa-phone"></i>
                <a href="tel:55555555">`+ contacto.telefono + `</a>
            </div>
        </div>
    </li>`
    );
}

function eliminarContacto(index) {
    confirm("¿Estás seguro que deseas eliminar un contacto?");
    contactos.splice(index, 1);
    imprimirTodosLosContactos();
}
function imprimirTodosLosContactos() {
    document.getElementById("contactos").innerHTML = "";
    contactos.forEach(imprimirContacto);
}
function agregarContacto() {
    var nombre = document.getElementById("nombre").value;
    var empresa = document.getElementById("empresa").value;
    var email = document.getElementById("email").value;
    var telefono = document.getElementById("telefono").value;
    var errores = document.getElementById("errores");

    var expresion = /\w+@\w+\.+[a-z]/;
    var error = "";
    var n = email.indexOf("@");
    if (!expresion.test(email)) {
        error = error + " El correo no es valido (correo@mail.com)\n";
        document.getElementById("errores").innerHTML = "";
        errores.insertAdjacentHTML('beforeend', `<li>` + error + `</li>`);
    }
    if (nombre.length == 0) {
        error = error + " El nombre es obligatorio\n";
        document.getElementById("errores").innerHTML = "";
        errores.insertAdjacentHTML('beforeend', `<li>` + error + `</li>`);
    }
    if (error == "") {
        contactos.push({ nombre: nombre, empresa: empresa, email: email, telefono: telefono });
        cerrar();
        imprimirTodosLosContactos();
        clearCampo();
    }
    else alert(error);
}
//function erroresUl() {}
imprimirTodosLosContactos();
function clearCampo() {
    document.getElementById("nombre").value = "";
    document.getElementById("empresa").value = "";
    document.getElementById("email").value = "";
    document.getElementById("telefono").value = "";
}
