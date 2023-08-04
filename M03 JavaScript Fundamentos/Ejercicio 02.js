/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*2️⃣ EJERCICIO 02 2️⃣*/

function devolverString(string) {
   // Debe retornar un string.
   // Tu código:
   var cadena = string; 
   return cadena; 
}

// ⛔️ "X" e "Y" son números.

function suma(x, y) {
   // Retorna el resultado de su suma.
   // Tu código:
   var result = x + y; 
   return result; 
}

function resta(x, y) {
   // Retorna el resultado de la resta.
   // Tu código:
   var result = x - y; 
   return result; 
}

function divide(x, y) {
   // Retorna el resultado de su división.
   // Tu código:
   var result = x / y; 
   return result; 
}

function multiplica(x, y) {
   // Retorna el resultado de su multiplicación.
   // Tu código:
   var result = x * y; 
   return result; 
}

function obtenerResto(x, y) {
   // Obten el resto de la división de "x" entre "y".
   // Tu código:
   var result = x % y; 
   return result; 
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverString,
   suma,
   resta,
   divide,
   multiplica,
   obtenerResto,
};
