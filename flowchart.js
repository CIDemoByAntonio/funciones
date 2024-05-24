let largo = 5750
let ancho = 2570
let area = largo * ancho

let costo = area * 35  //1750

let total = 0
if (costo >= 5000) {
    total = costo * 0.85 //1487,5
} else {
    total = costo
}

console.log("El resultado es:", total)

