// Usuario y contraseña correctos (no cambian, por eso usamos const)
const usuarioCorrecto = "Matias";
const contraseñaCorrecta = "1234";

// Variables que pueden cambiar según lo que escriba el usuario, por eso usamos let
let usuarioIngresado = prompt("Ingrese su usuario:");
let contraseñaIngresada = prompt("Ingrese su contraseña:");

// Bandera que usamos para controlar si seguimos preguntando o no
let bandera = true;

// Mientras la bandera sea true, se repite este bloque
while (bandera) {
    // Verificamos si usuario y contraseña son correctos
    if (usuarioIngresado === usuarioCorrecto && contraseñaIngresada === contraseñaCorrecta) {
        alert("Acceso concedido.");
        bandera = false; // Cortamos el bucle porque ya ingresó correctamente
    } else {
        alert("Usuario o contraseña incorrectos.");

        // Se pregunta si quiere reintentar
        const quiereReintentar = confirm("¿Desea volver a intentarlo?");

        if (quiereReintentar) {
            // Si quiere seguir, le pedimos los datos de nuevos
            usuarioIngresado = prompt("Ingrese su usuario:");
            contraseñaIngresada = prompt("Ingrese su contraseña:");
        } else {
            // Se corta el bucle si no quiere reintentar
            bandera = false;
        }
    }
}
