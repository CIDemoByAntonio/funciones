let numeroDia = 5 // Cambia este valor para probar diferentes casos
switch (numeroDia) {
    case 1:
        console.log('Lunes')
        break
    case 2:
        console.log('Martes')
        break
    case 3:
        console.log('Miercoles')
        break
    case 4:
        console.log('Jueves')
        break
    case 5:
        console.log('Viernes')
        break
    case 6:
        console.log('Sabado')
        break
    case 7:
        console.log('Domingo')
        break
    default:
        console.log('Dia invalido')
}
console.log(numeroDia)

let calificacion = 5
/* true lo que se está haciendo es evaluar cada caso basado en la evaluación de expresiones booleanas. 
Esto puede ser útil cuando tienes múltiples condiciones */
switch (true) {
    case (calificacion >= 4, 8 && calificacion <= 5):
        console.log('Excelente')
        break
    case (calificacion >= 4, 4 && calificacion <= 4, 7):
        console.assert.log('Muy bien')
        break
    case (calificacion >= 3, 7 && calificacion <= 4, 3):
        console.log('Bien')
        break
    case (calificacion >= 3, 0 && calificacion <= 3.6):
        console.log('Suficiente')
        break
    case (calificacion >= 0 && calificacion <= 2, 9):
        break
    default:
        console.log('Calificacion invalida')
}
console.log(calificacion)

//Objetos 
let persona = {
    nombre: 'Michael', 
    edad: 19,
    nacionalidad: 'Colombiana',
    deporte_favorito: 'Futbol,padel'
}
console.log(persona)
console.log(persona.nombre,persona.edad)
//Actualizar propiedades de un objeto
let auto = {
    marca: 'Toyota',
    modelo: 'Corolla',
    año: '2018'
}
console.log(auto.año)
//Actualizo las propiedades del años
auto.año = 2021
console.log(auto) //2021