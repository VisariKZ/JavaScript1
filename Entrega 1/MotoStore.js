/* Simulación de MotoStore */

/* Datos del usuario */
const cliente = {
    nombre: "Matias",
    clave: 1234,
    dinero: 15000
};

/* Stock de motos disponibles */
const catalogoMotos = [
    { modelo: "Zanella RX 150", precio: 1200 },
    { modelo: "Honda Wave 110", precio: 1800 },
    { modelo: "Yamaha FZ 2.0", precio: 3200 },
    { modelo: "Bajaj Dominar 400", precio: 5200 },
    { modelo: "Benelli TRK 251", precio: 4700 }
];

/* Motos compradas */
const motosCompradas = [];

/* Menú principal */
function mostrarMenu() {
    let opcion = Number(prompt(
        "¿Qué te gustaría hacer?\n" +
        "1. Comprar moto\n" +
        "2. Ver catálogo\n" +
        "3. Ver mis motos\n" +
        "4. Moto más cara comprada\n" +
        "5. Moto más barata comprada\n" +
        "6. Salir"
    ));
    return validarOpcion(opcion);
}

function validarOpcion(op) {
    while (op < 1 || op > 6 || isNaN(op)) {
        op = Number(prompt("Opción inválida. Elegí una válida:\n1 a 6."));
    }
    return op;
}

function mostrarCatalogo(lista) {
    return lista.map(m => `${m.modelo} - $${m.precio}`).join("\n");
}

function mostrarMisMotos(lista) {
    if (lista.length === 0) return "Todavía no compraste ninguna moto.";
    return lista.map(m => `${m.modelo} - $${m.precio}`).join("\n");
}

function buscarMoto(nombre) {
    const nombreNormalizado = nombre.trim().toLowerCase();
    return catalogoMotos.find(moto => moto.modelo.toLowerCase() === nombreNormalizado) || null;
}

function yaComprada(moto) {
    return motosCompradas.some(m => m.modelo.toLowerCase() === moto.modelo.toLowerCase());
}

function obtenerMotoMasCara(lista) {
    return lista.reduce((max, moto) => moto.precio > max.precio ? moto : max, lista[0]);
}

function obtenerMotoMasBarata(lista) {
    return lista.reduce((min, moto) => moto.precio < min.precio ? moto : min, lista[0]);
}

/* Login */
alert("Bienvenido a MotoStore");
let inputNombre = prompt("Ingresá tu nombre de usuario:");
let inputClave = Number(prompt("Ingresá tu clave:"));

if (inputNombre === cliente.nombre && inputClave === cliente.clave) {
    alert(`Hola ${cliente.nombre}, tu saldo disponible es $${cliente.dinero}`);

    let salir = false;
    while (!salir) {
        let opcion = mostrarMenu();

        switch (opcion) {
            case 1:
                let lista = mostrarCatalogo(catalogoMotos);
                let modeloElegido = prompt("¿Qué moto querés comprar?\n" + lista);
                let moto = buscarMoto(modeloElegido);

                if (!moto) {
                    alert("Esa moto no está en el catálogo.");
                } else if (yaComprada(moto)) {
                    alert("Ya compraste esa moto.");
                } else if (cliente.dinero < moto.precio) {
                    alert("No tenés suficiente dinero.");
                } else {
                    let confirmar = confirm(`¿Confirmás la compra de la ${moto.modelo} por $${moto.precio}?`);
                    if (confirmar) {
                        motosCompradas.push(moto);
                        cliente.dinero -= moto.precio;
                        alert(`¡Felicitaciones! Compraste una ${moto.modelo}`);
                    } else {
                        alert("Compra cancelada.");
                    }
                }
                break;

            case 2:
                alert("Catálogo de motos:\n" + mostrarCatalogo(catalogoMotos));
                break;

            case 3:
                alert("Tus motos:\n" + mostrarMisMotos(motosCompradas));
                break;

            case 4:
                if (motosCompradas.length === 0) {
                    alert("No compraste ninguna moto todavía.");
                } else {
                    let cara = obtenerMotoMasCara(motosCompradas);
                    alert(`La moto más cara que compraste es ${cara.modelo} - $${cara.precio}`);
                }
                break;

            case 5:
                if (motosCompradas.length === 0) {
                    alert("No compraste ninguna moto todavía.");
                } else {
                    let barata = obtenerMotoMasBarata(motosCompradas);
                    alert(`La moto más barata que compraste es ${barata.modelo} - $${barata.precio}`);
                }
                break;

            case 6:
                alert("¡Gracias por usar MotoStore! Hasta la próxima.");
                salir = true;
                break;
        }
    }
} else {
    alert("Nombre de usuario o clave incorrectos.");
}
