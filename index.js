/* --- */

num1 = 3;
num2 = 4;

num3 = 2

/* 1 */

if(num1 > num2){
    console.log(`${num1} es más grande que ${num2}`)
}else{
    console.log(`${num2} es más grande que ${num1}`)    
}

/* 2 */

if(num1 == num2){
    console.log(`${num1} es igual que ${num2}`)
}else{
    console.log(`${num1} es distinto a ${num2}`)    
}

/* 3 */

if(num1 < num2 ){
    console.log(`el ${num1} es el más grande`)
}else if (num2 < num1){
    console.log(`el ${num2} es el más grande`)
}else{
    console.log(`Son iguales`)
}

/* 4 */

if(num1 < num2 && num1 < num3){
    console.log(`el ${num1} es el más chico de los 3`)
}else if (num2 < num1 && num2 < num3){
    console.log(`el ${num2} es el más chico de los 3`)
}else{
    console.log(`el ${num3} es el más chico de los 3`)
}

/* 5 */

let persona1 = {
    nombre: "Laura",
    altura: 160,
    edad: 20
};
let persona2 = {
    nombre: "Pepe",
    altura: 170,
    edad: 21
}

if(persona1.altura > persona2.altura){
    console.log(`${persona1.nombre} es más alto que ${persona2.nombre}`)
}else{
    console.log(`${persona2.nombre} es más alto que ${persona1.nombre}`)
}

if(persona1.edad > persona2.edad){
    console.log(`${persona1.nombre} es más viejo que ${persona2.nombre}`)
}else{
    console.log(`${persona2.nombre} es más viejo que ${persona1.nombre}`)
}

/* 6 */

/* let me = {
    nombre: prompt("Tu nombre"),
    edad: Number(prompt("Tu edad")),
    altura: Number(prompt("Tu altura")),
    vision: Number(prompt("Rango de visión"))
}

if(me.edad >= 18 && me.altura >= 150 && me.vision >= 8){
    console.log(`${me.nombre} puedes conducir!`)
}else {
    console.log(`Lo siento, ${me.nombre}, no puedes conducir!`)
}
 */

/* 7 */

/* const miNombre = "Fede"
let nombre = prompt("¿Cómo te llamas?");
let pase = prompt("¿Pase Vip o Normal?");
let entrada = confirm("¿Tenes entrada?");
let dinero;
let confirmarEntrada;

if (nombre == miNombre && pase == "Vip") {
    console.log("¡Bienvenido! " + nombre);
} else if (entrada == true) {
    confirmarEntrada = confirm("¿Quieres utilizar la entrada?");
    if (confirmarEntrada == true) {
        console.log("¡Bienvenido! " + nombre);
    }
} else if (nombre != miNombre || pase == "Normal" || entrada == false) {
    confirmarEntrada = confirm("¿Desea comprar una entrada?");
    if (confirmarEntrada == true) {
        let dinero = prompt("¿Cuanto dinero tenés?")
        let dinero$ = parseInt(dinero)

        if (dinero$ >= 1000) {
            console.log("Venta finalizada, ¡Bienvenido! " + nombre);
        } else {
            console.log("Venta rechazada, tu dinero $" + dinero$ + " es insuficiente.");
        }
    } else if (confirmarEntrada == false) {
        console.log("Hasta luego");
    }
} */

/* 8 */

/* let numeroIncognita = Math.round(Math.random()*10)
let miNumero = Number(prompt("Dime un número: "))
let intentos = 0
console.log(numeroIncognita)

if(numeroIncognita == miNumero){
    console.log(`Muy bien acertaste, el número era ${numeroIncognita} en ${intentos} intentos`)
}else{
    intentos +=1;
    console.log(`no te desanimes, todavía quedan ${intentos} intentos`)
    if(numeroIncognita > miNumero){
        console.log("El numero es más grande")
    }else{
        console.log("El numero es más chico")
    }

    miNumero = Number(prompt("Dime otro número (Intento 2): "))

    if(numeroIncognita == miNumero){
        console.log(`Muy bien acertaste, el número era ${numeroIncognita} en ${intentos} intentos`)
    }else{
        intentos +=1;
        console.log(`no te desanimes, todavía quedan ${intentos} intentos`)
        if(numeroIncognita > miNumero){
            console.log("El numero es más grande")
        }else{
            console.log("El numero es más chico")
        }
    }

    miNumero = Number(prompt("Dime otro número (Intento 3): "))
    if(numeroIncognita == miNumero){
        console.log(`Muy bien acertaste, el número era ${numeroIncognita} en ${intentos} intentos`)
    }else{
        intentos +=1;
        console.log(`no te desanimes, todavía quedan ${intentos} intentos`)
        if(numeroIncognita > miNumero){
            console.log("El numero es más grande")
        }else{
            console.log("El numero es más chico")
        }
    }
} */

/* 9 */

/* let edad = Number(prompt("Ingresa tu edad"));

if (edad >= 45 && edad <= 100) {
    console.log("Anciano")
}else if (edad > 18 && edad < 45){
    console.log("Adulto")
}else if(edad > 12 && edad < 19){
    console.log("Adolescente")
}else if(edad > -1 && edad < 13){
    console.log("Infante")
}else{
    console.log("Tenes esa edad?")
}
 */

/* 10 */

/* let jugador1 = prompt("Jugador 1: piedra, papel o tijera?").trim().toLowerCase();
let jugador2 = prompt("Jugador 2: piedra, papel o tijera?").trim().toLowerCase();

if(!(jugador1 == "piedra" || jugador1 == "papel" || jugador1 == "tijera")){
    alert("Jugador 1 hizo trampa")
}else if(!(jugador2 == "piedra" || jugador2 == "papel" || jugador2 == "tijera")){
    alert("Jugador 2 hizo trampa")
}
else if(jugador1 == "piedra" && jugador2 == "tijera"){
    alert("Jugador 1 gana!")
}else if(jugador1 == "papel" && jugador2 == "piedra" ){
    alert("Jugador 1 gana!")
}else if(jugador1 == "tijera" && jugador2 == "papel"){
    alert("Jugador 1 gana!")
}else if(jugador1 == jugador2){
    alert("Empate!")
}else{
    alert("Jugador 2 gana!")
} */

/* 11 */

/* let miColor = prompt("Ingrese el color").trim().toLowerCase()

switch (miColor) {
    case "blanco":
        alert("Falta de color")
        break;
    case "negro":
        alert("Falta de color")
        break;
    case "verde":
        alert("El color de la naturaleza")
        break;
    case "azul":
        alert("El color del agua")
        break
    case "amarillo":
        alert("El color del Sol")
        break
    case "rojo":
        alert("El color del fuego")
        break
    case "marron":
        alert("El color de la tierra")
        break
    default:
        alert("Excelente elección, no lo teníamos pensado")
        break;
} */

/* 12 */

/* let valor1 = Number(prompt("Ingrese el primer numero:"))

let valor2 = Number(prompt("Ingrese el segundo numero:"))

let operacion = Number(prompt("1: Suma, 2: Resta, 3: Multiplicación, 4: División"))

switch (operacion) {
    case 1:
        alert(`${valor1} + ${valor2} = ${valor1 + valor2}`)
        break;
    case 2:
        alert(`${valor1} - ${valor2} = ${valor1 - valor2}`)
        break;
    case 3:
        alert(`${valor1} x ${valor2} = ${valor1 * valor2}`)
        break;
    case 4:
        if(valor2 == 0){
            alert("Error, no se puede dividir por 0")
        }else{
            alert(`${valor1} / ${valor2} = ${valor1 / valor2}`)
        }
        break;
    default:
        alert("Operación invalida")
        break;
}
 */

/* 13 */

let nombre = prompt("Ingrese su nombre:")
let apellido = prompt("Ingrese su apellido:")
let documento = Number(prompt("Ingrese su documento:"))
let genero = prompt("Ingrese su genero:")
let nacionalidad = prompt("Ingrese su nacionalidad:")
let fechaNacimiento = prompt("Ingrese su fecha de nacimiento:")

console.log(`Nombre: ${nombre}, Apellido: ${apellido}, Documento: ${documento}, Genero: ${genero}, Nacionalidad: ${nacionalidad}, Fecha de Nacimiento: ${fechaNacimiento}`)

let confirmar = confirm("Estos datos son correctos?")


if(confirmar){
    let dni = {
        nombre,
        apellido,
        documento,
        genero,
        nacionalidad,
        fechaNacimiento
    }
    console.table(dni)
    alert("Registro exitoso")
}else{
    alert("Vuelva dentro de un mes")
}