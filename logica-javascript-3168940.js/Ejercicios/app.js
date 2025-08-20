//ejercicio 1: 
// let num = parseint(prompt("Ingrese un número:"));
// console.log("El número ingresado es:", numero);
// if (numero >= 0) {
//     console.log("El número es positivo.");
// }
// else {      
//     console.log("El número es negativo.");
// }

//ejrcicio 2: 
//  let num1 = parseInt(prompt("Ingrese el primer número:"));
// let num2 = parseInt(prompt("Ingrese el segundo número:"));
// if (num1 >= 0) {
//      console.log("El primer número es positivo:", num1);
// } else {
//      console.log("El primer número es negativo:", num1);
//  }
// if (num2 >= 0) {
//      console.log("El segundo número es positivo:", num2);
//  } else {
//     console.log("El segundo número es negativo:", num2);
// }   

//ejerccio 3: 
//  let num1 = parseInt(prompt("Ingrese el primer número:"));
//  let num2 = parseInt(prompt("Ingrese el segundo número:"));
//  if (num1 === num2) {
//     console.log("Los números son iguales. Producto:", num1 * num2);    }  
// else if (num1 > num2) {
//     console.log("El primer número es mayor que el segundo. Resta:", num1 - num2);
// } else {
//     console.log("Los números son diferentes. Suma:", num1 + num2);
// }

//ejercicio 4: 
// let costoArticulo = parseFloat(prompt("Ingrese el costo del artículo:"));
//  let dineroEntregado = parseFloat(prompt("Ingrese la cantidad de dinero entregada:"));
//  let cambio = dineroEntregado - costoArticulo;  
// if (cambio < 0) {
//     console.log("El dinero entregado no es suficiente para cubrir el costo del artículo.");
// } else {
//     console.log("El cambio a entregar es:", cambio.toFixed(2));
// }     


//ejrcicio 5: 
// let numeroVacunas = parseInt(prompt("Ingrese el número de vacunas:"));
// let costoVacuna = parseFloat(prompt("Ingrese el costo de cada vacuna:"));
// let costoAplicacion = parseFloat(prompt("Ingrese el costo de aplicación por vacuna:"));
// let totalGastado = numeroVacunas * (costoVacuna + costoAplicacion);        
// console.log("Total gastado en vacunas:", totalGastado.toFixed(2));

//ejercicio 6: 
// let cantidadCamisas = parseInt(prompt("Ingrese la cantidad de camisas compradas:"));             
// let precioCamisa = parseFloat(prompt("Ingrese el precio de cada camisa:"));
// let totalCompra = cantidadCamisas * precioCamisa;
// let descuento = 0;
// if (cantidadCamisas >= 3) {
//     descuento = totalCompra * 0.20; // 20% de descuento
// } else {
//     descuento = totalCompra * 0.10; // 10% de descuento
// }
// let totalPagar = totalCompra - descuento;
// console.log("Total a pagar por la compra de camisas:", totalPagar.toFixed(2));
// console.log("Descuento aplicado:", descuento.toFixed(2)); 

//ejercico 7: un tendero empezo el dia con un valor X en dinero. Luego tuvo 4 ventas por un valor de $800.000 (cada una) y finalmente pago a sus acreedores el 10% de todo lo que tenia en caja. Desaarrolle un algoritmo para imprimir el dinero con el que empezo, el dinero con el que termino y el pago a sus acrreedores.
// let dineroInicial = parseFloat(prompt("Ingrese el dinero inicial del tendero:"));
// let ventas = 4 * 800000; 
// let dineroFinal = dineroInicial + ventas; 
// let pagoAcreedores = dineroFinal * 0.10; 
// dineroFinal -= pagoAcreedores; 

// ejercicio 8: 
// let ventas = [];
//  for (let i = 0; i < 5; i++) {
//     let venta = parseFloat(prompt(`Ingrese la venta del día ${i + 1}:`));
//      ventas.push(venta);
//  }
//  let totalVentas = ventas.reduce((acc, curr) => acc + curr, 0);
//  let promedioVentas = totalVentas / ventas.length;
// console.log("El promedio de ventas en los últimos 5 días es:", promedioVentas.toFixed(2));

// ejercicio 9:
//  let num1 = parseFloat(prompt("Ingrese el primer número:"));
//  let num2 = parseFloat(prompt("Ingrese el segundo número:"));
//  let operacion = prompt("Ingrese la operación a realizar (suma, resta, multiplicacion, division):").toLowerCase();
// let resultado;
//  switch (operacion) {
//         case "suma":
//             resultado = Math.floor(num1 + num2);
//             console.log("Resultado de la suma:", resultado);
//             break;
//         case "resta":
//             resultado = Math.floor(num1 - num2);
//             console.log("Resultado de la resta:", resultado);
//             break;
//         case "multiplicacion":
//             resultado = Math.floor(num1 * num2);
//             console.log("Resultado de la multiplicación:", resultado);
//             break;
//         case "division":
//             if (num2 !== 0) {
//                 resultado = Math.floor(num1 / num2);
//                 console.log("Resultado de la división:", resultado);
//             } else {
//                 console.log("Error: División por cero no permitida.");
//             }
//             break;
//         default:
//             console.log("Operación no válida. Por favor, ingrese una operación válida.");
//     }            

//ejercicio 10: 
// let num1 = parseFloat(prompt("Ingrese el primer número:"));
// let num2 = parseFloat(prompt("Ingrese el segundo número:"));
// let num3 = parseFloat(prompt("Ingrese el tercer número:")); 
// let mayor, menor, medio;
// if (num1 >= num2 && num1 >= num3) {
//     mayor = num1;
//     if (num2 <= num3) {
//         menor = num2;
//         medio = num3;
//     } else {
//         menor = num3;
//         medio = num2;
//     }
//  } else if (num2 >= num1 && num2 >= num3) {
//      mayor = num2;
//     if (num1 <= num3) {
//         menor = num1;
//        medio = num3;
//     } else {
//         menor = num3;
//        medio = num1;
//      }
//  } else {
//     mayor = num3;
//     if (num1 <= num2) {
//         menor = num1;
//         medio = num2;
//      } else {
//          menor = num2;
//         medio = num1;
//    }
//  }       

// console.log("Número mayor:", mayor);
//  console.log("Número menor:", menor);
// console.log("Número medio:", medio);
// if (num1 === num2 || num1 === num3 || num2 === num3) {
//     console.log("Números iguales encontrados.");
//  } else {
//     console.log("No hay números iguales.");
// }    

//ejrcico 11: 
//  let peso = parseFloat(prompt("Ingrese el peso del deportista en kilogramos:  "));
//  if (edad >= 18 && altura > 1.7 && peso >= 50 && peso <= 90) {
//     console.log("El deportista queda seleccionado para el equipo de baloncesto.");
//  } else {
//      console.log("El deportista no cumple con los requisitos para el equipo de baloncesto.");
//  }

//ejrcicio 12: Un decreto presindencial permite el aumento del 10% a auquellos trabajadores que ganen el sueldo minimo. Hacer un algoritmo que lea el sueldo de un trabajador e imprima el sueldo a devengar, despues del decreto.
//  let sueldoMinimo = 1000000; 
//  let sueldoTrabajador = parseFloat(prompt("Ingrese el sueldo del trabajador:"));
//  if (sueldoTrabajador < sueldoMinimo) {
//      console.log("El trabajador no cumple con el sueldo mínimo para el aumento.");
//  } else {
//      let aumento = sueldoTrabajador * 0.10; 
//      let sueldoFinal = sueldoTrabajador + aumento;
//      console.log("El sueldo a devengar después del decreto es:", sueldoFinal.toFixed(2));
// } 

//ejercicio 13: 
// let datos = [];
// for (let i = 0; i < 3; i++) {
//     let dato = prompt(`Ingrese el dato ${i + 1}:`);
//     datos.push(dato);
// }
// console.log("Contenido del array 'datos':", datos); 

//ejrcicio 14: 
//  while (true) { 
//     let nombre = prompt("Ingrese un nombre (o escriba 'salir' para terminar):");
//     if (nombre.toLowerCase() === "salir") {
//         break;
//     }
//     nombres.push(nombre);
//     console.log("Nombre ingresado:", nombre);
//  }
// console.log("Lista de nombres ingresados:", nombres);                 

//ejcicio 15: 
// let num1 = Math.floor(Math.random() * 10); 
// let num2 = Math.floor(Math.random() * 1000); 
// let resultado = num1 * num2;
// let respuestaUsuario = parseInt(prompt(`¿Cuál es el resultado de ${num1} * ${num2}?`));
// if (respuestaUsuario === resultado) {
//     console.log("¡Ganaste!");
// }
// else {  
//     console.log("Respuesta incorrecta. Intenta de nuevo.");
//     num1 = Math.floor(Math.random() * 10); 
//     num2 = Math.floor(Math.random() * 1000); 
//     resultado = num1 * num2;
//     respuestaUsuario = parseInt(prompt(`¿Cuál es el resultado de ${num1} * ${num2}?`));
//     if (respuestaUsuario === resultado) {
//         console.log("¡Ganaste esta vez!");
//     } else {
//         console.log("Respuesta incorrecta nuevamente. Mejor suerte la próxima vez.");
//     }
// }



//ejercicio extra: cree un array de 8 frutas y con ayuda del ciclo for imprimalos ern pantalla en una lista numerada.
// let frutas = ["Manzana", "Banana", "Naranja", "Fresa", "Kiwi", "Mango", "Pera", "Uva"];
// document.write("Lista de frutas:<br>");
// for (let i = 0; i < frutas.length; i++) {
//     document.write(`${i + 1}. ${frutas[i]}<br>`);
// }




