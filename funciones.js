//Redondeo de cifras
//Math es una clase que permite realizar funciones matematicas dentro de mi codigo
var precio = Math.round(399.53)
let precio2 = (399.53).toFixed(0)

document.write('Precio redondeado: ', precio)
document.write('<br>')
document.write('Precio redondeado: ', precio2) 
document.write('<br>')
//Redondea sin importar el decimal y agrega 1 pa redondear hacia arriba
var precio = Math.ceil(299.9)
document.write('Precio redondeado: ', precio)
document.write('<br>')
//Redondea sin importar el decimal hacia abajo
var precio = Math.floor(299.9)
document.write('Precio redondeado: ', precio) 
document.write('<br>')
//Calcula el seno de un angulo
var seno = Math.sin(45)
document.write('Seno de 45: ', seno)
document.write('<br>')
var seno_dos = Math.sin(50)
document.write('Seno de 50: ', seno_dos)
document.write('<br>')
if (seno == seno_dos) {
    document.write('Son iguales')
} else{
    document.write('No son iguales')
}
document.write('<br>')
//Calcular el exponencial de un numero 
var expo = Math.exp(2)
document.write('Exponencial de 2: ', expo)
document.write('<br>')

//Calcular logaritmo de un numero
var logaritmo = Math.log(10)
document.write('Logaritmo de 10: ', logaritmo)
document.write('<br>')

//Valor absoluto de un numero 
//Cambia un numero negativo a uno positivo
var absoluto = Math.abs(-10)
document.write('Valor Absoluto de -10: ', absoluto)
document.write('<br>')

//Calcula el valor maximo de la secuencia 
//Saca el valor mas alto
var maximo = Math.max(10,50,600,1,8,580,452)
document.write('Mayor valor: ', maximo)
document.write('<br>')

let numero = 590
if (maximo > numero) {
    document.write('El valor maximo es mas grande')
} else{
    document.write('El valor numero es mas grande')
}
document.write('<br>')

//Calcula el valor minimo de la secuencia 
//Saca el valor mas pequeño
var minimo = Math.min(10,50,600,1,8,580,452)
document.write('Menor valor: ', minimo)
document.write('<br>')

//Traer en pantalla valor aleatorio
//Con el round lo redondemos
//El * 10 es el valor rango de 0 a 10
var aleatorio = Math.round(Math.random()*10)
document.write('Valor aleatorio: ', aleatorio)
document.write('<br>')

if(aleatorio < 10){
    document.write('por debajo del valor')
} else if(aleatorio == 10){
    document.write('Mismo valor')
}
document.write('<br>')
//Raiz cuadrada de un numero
var raiz = Math.sqrt(81)
document.write('Raiz de 81: ',raiz)
document.write('<br>')

//Calcular el exponente de un numero
var exponente = Math.pow(4,2)
document.write('Valor de 4 a la 2: ',exponente)









