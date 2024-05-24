for (let index = 0; index < 5; index++) {
    console.log('Hola')
}

let contador = 0
while (contador < 5) {
    console.log('Como estas')
    contador++
}

let frutas = ['Manzana', 'Fresa', 'Uvas', 'Mango', 'Piña', 'Naranja']

console.log(frutas[0], frutas[3])

console.log(frutas[0] != frutas[3]) //Los dos valores no son iguales 

frutas.unshift('Pitaña') //Añade una fruta al principio del array
console.log(frutas)

frutas.push('Zapote')  //Añade una fruta al final del array
console.log(frutas)

frutas[0] = 'Manmoncillo' //Modifica un elemento especifico del array
console.log(frutas)

for (let index = 0; index < frutas.length; index++) {
    console.log(frutas[index])   ////Recorrer el array y mostrar el elemento
}
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Filtrar números pares
let numerosPares = numeros.filter(numero => numero % 2 === 0);
console.log(numerosPares);

let persona = [
    { nombre: 'Juan', edad: 25 },
    { nombre: 'Sebastian', edad: 18 },
    { nombre: 'Felipe', edad: 21 },
    { nombre: 'Juan', edad: 19 }
]
//find devuelve el primer elemento que cumpla con la condicion 
let personaMayorDe20 = persona.find(persona => persona.edad > 20)
console.log(personaMayorDe20)
console.log('--------------------------------------------')
//filter devuelve los elementos que cumpla con la condicion 
let personaMayoresDe20 = persona.filter(persona => persona.edad >= 20)
console.log(personaMayoresDe20)
//Busco personas con el mismo nombre
let MismoNombre = persona.filter(persona => persona.nombre == 'Juan')
console.log(MismoNombre)

let num = 7

if (num > 0) {
    console.log('El numero es positivo')
} else if (num < 0) {
    console.log('El numero es negativo')
} else if (num == 0) {               //Especificamos bien el codigo para que no hayan fallos
    console.log('El numero es igual a cero')
}
/*else{
    console.log('El numero es igual a cero')
}*/

const edad1 = 18
const edad2 = 22
if (edad1 > edad2) {
    console.log('edad1 Es mayor')
} else if (edad1 < edad2) {
    console.log('edad2 Es mayor')
} else if (edad1 == edad2) {
    console.log('Ambas edades son iguales')
}
let par = 8
if (par % 2 === 0) {     //si el numero es dividido por 2 el residuo va ser cero 
    console.log('El numero es par')
} else {
    console.log('El numero es impar')
}

let edad = 18
if(edad >= 18){
    console.log(edad,'La persona es mayor de edad')
} else{
    console.log(edad,'La persona no es mayor de edad')
}
let edad5 = 18
let tienePermiso =  false
//El operador lógico || (OR) se usa para combinar ambas condiciones.
//La persona tiene acceso si al menos una de las condiciones es verdadera.
if(edad5 >= 18 || tienePermiso){
    console.log('La persona tiene acceso al sitio web')
} else{
    console.log('La persona no tiene acceso al sitio web')
}


