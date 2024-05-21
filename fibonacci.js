let cifras = [1, 1]

console.log(cifras[0] + cifras[1])
cifras.push(cifras[0] + cifras[1])
console.log(cifras)

console.log(cifras[1] + cifras[2])
cifras.push(cifras[1] + cifras[2])
console.log(cifras)
console.log("---------------------------------------")

//secuencia fibonacci
let fibo = [1, 1]
for (let index = 1; index < 10; index++) {      //index= 1 
    //console.log(fibo[index - 1] + fibo[index])   //fibo[index -1] = fibo[0] fibo[index] = fibo[1]
    fibo.push(fibo[index - 1] + fibo[index])  //añade el resultado dentro del array 
    console.log(fibo)
}
// index = 2
// fibo[index -1] = fibo[1]
//fibo[index] = fibo[2]
//fibo[index -1] + fibo[index] = fibo[1] + fibo[2]

// index = 3
//fibo[index -1] = fibo[2]
//fibo[index] = fibo[3]
//fibo[index -1] + fibo[index] = fibo[2] + fibo[3]

// index = 4
//fibo[index -1] = fibo[3]
//fibo[index] = fibo[4]
//fibo[index -1] + fibo[index] = fibo[3] + fibo[4]


