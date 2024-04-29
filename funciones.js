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

