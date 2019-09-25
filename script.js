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
function imprimirContacto(contacto) {
    var addContacto = document.getElementById("contactos");
    addContacto.insertAdjacentHTML('beforeend',
        `<li class="contacto">
        <div class="actions">
            <a><i onclick="eliminarContacto()" class="fa fa-trash"></i></a>
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
    console.log("index");
    confirm("¿Estás seguro que deseas eliminar un contacto?");
    contactos.splice(index, 1);
    imprimirTodosLosContactos();
}
function imprimirTodosLosContactos() {
    document.getElementById("contactos").innerHTML = "";
    contactos.forEach(imprimirContacto);
}
function validar() {
    var nombre = document.getElementById("nombre").value;
    var error = "";
    if (nombre.length = "") {
        error = error + " El nombre es obligatorio";
        alert(error);
        var node = document.createElement("LI");
        var textnode = document.createTextNode("La contrasenia debe tener al menos 8 caracteres.\n");
        node.appendChild(textnode);
        document.getElementById("errores").appendChild(node);
    } else {
        return true;
    }
}
function agregarContacto() {
    var nombre = document.getElementById("nombre").value;
    var empresa = document.getElementById("empresa").value;
    var email = document.getElementById("email").value;
    var telefono = document.getElementById("telefono").value;
    var error = "";

    if (nombre.length == 0) {

        error = error + " El nombre no es valido\n";
    }

    if (empresa.length == 0) {

        error = error + " La empresa no es valida\n";
    }

    var n = email.indexOf("@");

    if (n == -1) {

        error = error + " El correo no es valido (correo@mail.com)\n";
    }

    if (telefono.length == 0) {

        error = error + " El telefono no es valido\n";
    }


    if (error == "") {

        contactos.push({ nombre: nombre, empresa: empresa, email: email, telefono: telefono });
        cerrar();
        imprimirTodosLosContactos();
    }
    else alert(error);
}

imprimirTodosLosContactos();
