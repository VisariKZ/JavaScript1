// Usuario y contraseña correctos (no cambian, por eso usamos const)
const usuarioCorrecto = "Matias";
const contraseñaCorrecta = "1234";

// Variables que pueden cambiar según lo que escriba el usuario, por eso usamos let
let usuarioIngresado = prompt("Ingrese su usuario:");
let contraseñaIngresada = prompt("Ingrese su contraseña:");
let seLogueo = false

// Bandera que usamos para controlar si seguimos preguntando o no
let bandera = true;

// Mientras la bandera sea true, se repite este bloque
while (bandera) {
    // Verificamos si usuario y contraseña son correctos
    if (usuarioIngresado === usuarioCorrecto && contraseñaIngresada === contraseñaCorrecta) {
        alert("Acceso concedido.");
        bandera = false; // Cortamos el bucle porque ya ingresó correctamente
        seLogueo = true
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

if(seLogueo){
    let valorInicia = Number(prompt("Con cuanto dinero quieres arrancar?"))
    
if(isNaN(valorInicia)){
    valorInicia = null
}
    bandera = true
    let limiteDeCuenta = 50000
    let saldo = valorInicia ?? 0
    let saldoEnPesos = 0
    let numeroAxu   = 0
    let deuda = 0
    let menuText = "Bienvenidos a Coder Bank:\n 1- Ver saldo\n 2- Depositar\n 3- Retirar dinero\n 4- Prestamo\n 5- Ver deuda\n 6- Pagar deuda\n 7- Ver saldo en Pesos\n 8- Ver deuda en pesos\n 9- Comprar pesos\n 0- Salir "

    while(bandera){
let menu = Number(prompt(menuText))

    while(isNaN(menu)){
        alert("Solo se admiten números.")
        menu = Number(prompt(menuText))
    }

    switch (menu) {
        case 1:
            alert(`Su saldo es ${saldo.toFixed(2)}`)
            break;
            case 2:
                numeroAxu = Number(prompt("¿Cuanto quiere ingresar?"))
                 while(isNaN(numeroAxu) || numeroAxu < 0 || numeroAxu + saldo > limiteDeCuenta){
                    alert("El valor es invalido")
                    numeroAxu = Number(prompt("¿Cuanto quiere ingresar?"))
                    
                 }
                 //saldo = numeroAxu + numeroAxu
                 saldo += numeroAxu
            break;
            case 3:
                numeroAxu = Number(prompt("¿Cuanto quiere retirar?"))
                 while(isNaN(numeroAxu) || numeroAxu < 0 || numeroAxu > saldo){
                    alert("No tienes suficiente dinero en la cuenta")
                    numeroAxu = Number(prompt("¿Cuanto quiere retirar?"))
                    
                 }
                 saldo -= numeroAxu
                 break;
                 case 4:
                numeroAxu = Number(prompt("¿Cuanto quiere pedir prestado?"))

                 while(isNaN(numeroAxu) || numeroAxu < 0 || numeroAxu > 5000 || numeroAxu + saldo > limiteDeCuenta){
                    alert("No puede realizar esta acción")
                    numeroAxu = Number(prompt("¿Cuanto quiere pedir prestado?"))
                    
                 }
                saldo += numeroAxu
                deuda += numeroAxu * 1.4
                break;
                case 5:
                    alert(`Su deuda es de: ${deuda.toFixed(2)}`)
                    break;
                    case 6:
                    alert(`Su deuda es de: ${deuda.toFixed(2)}`)
                    numeroAxu = Number(prompt("¿Cuanto quiere pagar de su deuda?"))

                 while(isNaN(numeroAxu) || numeroAxu < 0 || numeroAxu > saldo){
                    alert("No tienes suficiente dinero en la cuenta")
                    numeroAxu = Number(prompt("¿Cuanto quiere pagar de su deuda?"))
                 }

                 saldo -= numeroAxu
                 deuda -= numeroAxu
                    break;
                    case 7: 
                    alert(`Su cuenta en pesos es de: ${(saldo * 1200).toFixed(2)}`)
                    break;
                    case 8: 
                    alert(`Su deuda en pesos es de: ${(deuda * 1200).toFixed(2)}`)
                    break;
                    case 9: 

                    numeroAxu = Number(prompt("¿Cuantos dolares quiere convertir a pesos?"))

                 while(isNaN(numeroAxu) || numeroAxu < 0){
                    alert("No se puede realizar esta acción")
                    numeroAxu = Number(prompt("¿Cuantos dolares quiere convertir a pesos?"))
                    
                 }

                 let numeroAxuPesos = numeroAxu * 1200
                    
                    alert(`Sus dolares se transformaron en: ${numeroAxuPesos.toFixed(2)} pesos`)

                saldoEnPesos += numeroAxuPesos
                    break;
            case 0:
                alert("Ha salido correctamente")
                bandera = false
                break;
        default:
            alert("Seleccione una de las opciones válidas")
            break;
    }
}

    }