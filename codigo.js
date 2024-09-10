// Variables usando let
let nombre = "Camilo";
let edad = 30;
let esDesarrollador = true;
let ciudad = "Bogotá";
let colorFavorito = "azul";

// Variables usando const
const pi = 3.14159;
const maxUsuarios = 100;
const nombreEmpresa = "TechCorp";
const estaConectado = false;
const añoNacimiento = 1993;

// Función tipo flecha con cero parámetros (una sola operación)
const saludar = () => "¡Hola, mundo!";

// Función tipo flecha con cero parámetros (validaciones)
const saludarConValidacion = () => {
    let hora = new Date().getHours();
    if (hora < 12) {
        return "¡Buenos días!";
    } else if (hora < 18) {
        return "¡Buenas tardes!";
    } else {
        return "¡Buenas noches!";
    }
};

// Función tipo flecha con un parámetro (una sola operación)
const cuadrado = num => num * num;

// Función tipo flecha con un parámetro (validaciones)
const cuadradoConValidacion = num => {
    if (typeof num !== "number") {
        return "El valor debe ser un número";
    }
    return num * num;
};

// Función tipo flecha con dos o más parámetros (una sola operación)
const sumar = (a, b) => a + b;

//  (validaciones y switch)
const calcular = (a, b, operador) => {
    switch (operador) {
        case "sumar":
            return a + b;
        case "restar":
            return a - b;
        case "multiplicar":
            return a * b;
        case "dividir":
            return b !== 0 ? a / b : "No se puede dividir por cero";
        default:
            return "Operador inválido";
    }
};
// demostraciones
console.log(saludar()); 
console.log(saludarConValidacion()); 
console.log(cuadrado(5)); 
console.log(cuadradoConValidacion(5)); 
console.log(cuadradoConValidacion("5")); 
console.log(sumar(3, 4)); 
console.log(calcular(10, 5, "sumar")); 
console.log(calcular(10, 5, "restar")); 
console.log(calcular(10, 5, "multiplicar")); 
console.log(calcular(10, 5, "dividir")); 
console.log(calcular(10, 2, "dividir")); 
console.log(calcular(10, 5, "modulo")); 