/* 1 */

/* let num = 2;

for (let i = 0; i < 11; i++) [
  console.log(`${num} x ${i} = ${num * i}`);
} */

/* 2 */

/* let numeros = [];
let prompNum;

do {
  prompNum = Number(prompt("Ingrese un numero"));
  if(prompNum > 0){
    numeros.push(prompNum)
  }
} while (prompNum !== 0);

for (let i = 0; i < numeros.length; i++) {
  console.log(numeros[i])
} */

/* 3 */

/* let ultimoNumero = numeros[numeros.length - 1]
let numIngresado;
let intento = 0;

console.log("ultimo numero: " + ultimoNumero)

do {
  numIngresado = Number(prompt("Adivina el numero"));

  intento++;

  if(numIngresado < ultimoNumero){
    alert(`Intento ${intento}: El numero es más grande`)
  }else if(numIngresado > ultimoNumero){
    alert(`Intento ${intento}: El numero es más chico`)
  }else{
    alert(`El numero era: ${ultimoNumero}. Adivinaste en ${intento} intentos`)
  } 
} while (numIngresado != ultimoNumero); */

/* 4 */

/* let divisor = []

let numeroIngresado = Number(prompt("Ingrese un número: "))

for (let i = 0; i <= numeroIngresado; i++) {
  
  if( numeroIngresado % i == 0){
    divisor.push(i);
  }
  
}

for (let i = 0; i < divisor.length; i++) {
  console.log(divisor[i])  
}

if(divisor.length > 2){
  console.log("El número no es primo")
}else{
  console.log("El número es primo")
} */

/* 5 */

/* let numero = Number(prompt("Divisores de: "))
let divisores = []

for (let i = 0; i <= numero ; i++) {

  if (numero % i == 0) {
    divisores.push(i)
  }
  
}

for (let i = 0; i < divisores.length; i++) {
  console.log(divisores[i])
} */

/* 6 */

/* let cosasQueMeGustan = ["café", 240, "fanta", "musica", "redbull", "gatos", 8, "juegos", "guitarra", "asd" ]

for (const cosas of cosasQueMeGustan) {
  console.log(cosas)
} */

/* 7 */

/* let diezNumeros = [2, 42, 25, 54, 87, 0, 44, 78, 98, 5]

for (const numeros of diezNumeros) {
  console.log(numeros * 2)
} */

/* 8 */

/* let grupoFamiliar = [
  {
    nombre: "Manu",
    apellido: "Gimen",
    meGusta: "Tomar mate",
    parentesco: "primo de Fede"
  },
  {
    nombre: "Pato",
    apellido: "Gimenez",
    meGusta: "jugar al HS",
    parentesco: "primo de Fede"
  },
  {
    nombre: "Alicia",
    apellido: "Monica",
    meGusta: "Mirar series",
    parentesco: "mamá de Fede"
  },
]

for (const familiar of grupoFamiliar) {
  console.log(`Hola, soy ${familiar.nombre} ${familiar.apellido}, me gusta ${familiar.meGusta} y soy ${familiar.parentesco}`)
} */

/* 9 */

/* let diezNumeros = [2, 42, 25, 54, 87, 0, 44, 78, 98, 5]
let arrVacio = []

for (const impares of diezNumeros) {
  if(impares % 2 != 0){
    arrVacio.push(impares)
  }
}
 console.log(arrVacio) */

 /* 10 */

/* let numerosPares = []
let numerosImpares = []
let numIngresado;
let sumaPares = 0
let sumaImpares = 0

do {
  numIngresado = Number(prompt("Ingrese un número: "))
  if(numIngresado % 2 == 0){
    numerosPares.push(numIngresado);
  }else{
    numerosImpares.push(numIngresado);
  }

} while (numIngresado != 0);

for (let i = 0; i < numerosPares.length; i++) {
  sumaPares = sumaPares + numerosPares[i]
}

console.log(sumaPares);

for (let i = 0; i < numerosImpares.length; i++) {
  sumaPares = sumaPares + numerosImpares[i]
}

console.log(sumaImpares); */

/* 11 */

/* let diezNumeros = [2, 42, 25, 54, 87, 0, 44, 78, 98, 5]
let mayor = 0;

for (let i = 0; i < diezNumeros.length; i++) {
  
  if( diezNumeros[i] > mayor ){
    mayor = diezNumeros[i];
  }

}

console.log(mayor); */

/* 12 */

/* let diezNumeros = [2, 42, 25, 54, 87, 1, 44, 78, 98, 5]
let menor = diezNumeros[0];

for (let i = 0; i < diezNumeros.length; i++) {
  
  if( diezNumeros[i] < menor ){
    menor = diezNumeros[i];
  }

}

console.log(menor); */

/* 13 */

/* const jugador1 = {
  nombre: prompt("Nombre jugador 1: "),
  mano: null,
  puntos: 0,
}

const jugador2 = {
  nombre: prompt("Nombre jugador 2: "),
  mano: null,
  puntos: 0,
}

do {
  jugador1.mano = prompt(`${jugador1.nombre}: Piedra, papel o tijera?`).toLowerCase();
  jugador2.mano = prompt(`${jugador2.nombre}: Piedra, papel o tijera?`).toLowerCase();
  if(jugador1.mano == "piedra" && jugador2.mano == "tijera"){
    jugador1.puntos++
    alert(`${jugador1.nombre} ha ganado`)
  }else if(jugador1.mano == "tijera" && jugador2.mano == "papel"){
    jugador1.puntos++
    alert(`${jugador1.nombre} ha ganado`)
  }else if(jugador1.mano == "papel" && jugador1.mano == "piedra"){
    jugador1.puntos++
    alert(`${jugador1.nombre} ha ganado`)
  }else if(jugador1.mano == jugador2.mano){
    alert(`${jugador1.nombre} y ${jugador2.nombre} empataron`)
  }  else{
    jugador2.puntos++
    alert(`${jugador2.nombre} ha ganado`)
  }
} while (jugador1.mano !== jugador2.mano);

if(jugador1.puntos > jugador2.puntos){
  alert(`${jugador1.nombre} ganó ${jugador1.puntos} veces`)
}else{
  alert(`${jugador2.nombre} ganó ${jugador2.puntos} veces`)
} */

/* 14 */

/* let triangulo = "*"
let contador = 0

do {
  console.log(triangulo);
  triangulo = triangulo + "*"
  contador++
} while (contador !== 5); */

/* 15 */

/* let triangulo = ["*","*","*","*","*"]

do {
  let triangulo2 = triangulo.join('')
  console.log(triangulo2)
  triangulo.pop()
} while (triangulo.length !== 0); */

/* 16 */

/* busco vaciar el primer array e ir pasando el valor más chico al segundo, mientras el array de numeros tenga elementos va a 
seguir en bucle hasta vaciarlo y pasarlo ordenado al otro, con el for recorro hasta encontrar un valor más chico que el
primero, si lo hay me guardo el indice y el valor para usar el splice borrando el numero más chico, con el valor guardado en 
un lugar seguro lo puedo pushear a su nuevo array */
/* 
let numeros = [2, 42, 25, 54, 87, 1, 44, 78, 98, 5]
let numerosOrdenados = []

 while(numeros.length > 0){
  let menor = numeros[0];
  let indice = 0
  for (let i = 0; i < numeros.length; i++) {
    if(numeros[i] < menor){
      menor = numeros[i];
      indice = i;
    }
  }
  numeros.splice(indice, 1)
  numerosOrdenados.push(menor)
}


console.log(numerosOrdenados) */