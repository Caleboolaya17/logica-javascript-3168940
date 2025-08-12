//Boolean(...)

console.log(' "5" == "5" ', "5" == "5") //true
console.log(' "5" === "5" ', "5" === "5") //true
console.log(' 5 === "5" ', 5 === "5") //false
console.log(' 5 == "5" ', 5 == "5") //true
console.log(' 5 === (3+2) ', "5" === (3+2)) //false
console.log(' 5 === 5 ', 5 === 5) //true

//Concatenar ( + )

console.log( 5 + "3")
console.log( 5 + "3")
console.log( 5 + "3")

//pida dos numeros al usuaio y sumelos
let numA = prompt( 'dame num 1' )
let numB = prompt( 'dame num 2' )
let resultado = numA + numB
//alert( " El resultado de tu suma es " + resultado)

//Mostrar los valores de A y B
let ValorA = numA;
let ValorB = numB;
let a = ValorA;
let b = ValorB;
alert("El valor A es = (" + ValorA +")) y el valor B es = ( " + ValorB + ")");

alert("La suma de (" + a + ") + (" + b + ") es = " + (a + b));
alert("La resta de (" + a + ") - (" + b + ") es = "+ (a - b));
alert("La multiplicacion de (" + a + ") * (" + b + ") es = " + (a * b) + ")");
alert("La division de (" + a + ") / (" + b + ") es = " + (a / b));

//
console.log(`Tu numero es ${numA} `);
