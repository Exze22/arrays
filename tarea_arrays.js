// 1. Qué son los Arrays
// 1.1 Crea una función llamada `procesarPedido` que recibe un array `pedido`.
// Debes sacar el primer elemento (nombre del cliente), añadir "bebida" al inicio del array y añadir el nombre del cliente al final.

    // Tu código aquí
    function procesarPedido(pedido) {
        if (pedido.length === 0) {
            return [];
        }
    
        const cliente = pedido.shift();
       
        pedido.unshift("bebida");
    
        pedido.push(cliente);
    
        return pedido;
    }
    
    const pedidos = ["Juan", "taco", "ensalada"];
    procesarPedido(pedidos);



// 2. Iteración de Arrays en Javascript
// 2.1 Crea una función llamada `sumarPares` que reciba un array de números.
// Debes iterar sobre el array, sumar todos los números pares y devolver la suma.
function sumarPares(numeros) {
    let suma = 0;
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 === 0) {
            suma += numeros[i];
        }
    }
    return suma;
   }
 const arrayDeNumeros = [1, 2, 3, 4, 5, 6];
sumarPares(arrayDeNumeros);

// 3. Buscar en Arrays
// 3.1 Escribe una función llamada `palabrasTerminanConA` que reciba un array de palabras y devuelva `true` si todas terminan con "a", o `false` si al menos una no lo hace.
function palabrasTerminanConA(palabras) {
    return palabras.every(palabra => palabra.endsWith('a'));
}

const palabras = ['casa', 'silla', 'mesa'];
palabrasTerminanConA(palabras);

// 4. Transformar Arrays
// 4.1 Crea una función llamada `buscaPalabras` que reciba dos parámetros: un array `words` y una palabra `word`.
// Busca el índice de la palabra en el array y devuelve todas las palabras después de ese índice en un nuevo array
function buscaPalabras(words, word) {
    const index = words.indexOf(word);
    if (index === -1) {
        return [];
    }
    return words.slice(index + 1); o
}

const words = ['hola', 'mundo', 'javascript', 'node'];
buscaPalabras(words, 'mundo');

// 5. Matrices
// 5.1 Crea una función llamada `findJavaScript` que reciba una matriz de cadenas y devuelva la posición de "JavaScript".
// Si no la encuentra, devuelve [-1, -1].
function findJavaScript(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === 'JavaScript') {
                return [i, j];
            }
        }
    }
    return [-1, -1];
}

const matrix = [
    ['HTML', 'CSS', 'JavaScript'],
    ['Java', 'C++', 'Python'],
    ['Ruby', 'Go', 'Swift']
];

const posicion = findJavaScript(matrix);
findJavaScript(matrix);
// 6. Algoritmos con Arrays
// 6.1 Crea una función llamada `findMinMaxPages` que reciba un array de números (representando el número de páginas de libros).
// La función debe devolver un array con dos posiciones: el índice del libro con menos páginas y el índice del libro con más páginas.
function findMinMaxPages(books) {
    if (books.length === 0) return [-1, -1];

    let minIndex = 0;
    let maxIndex = 0; 
    for (let i = 1; i < books.length; i++) {
        if (books[i] < books[minIndex]) {
            minIndex = i; 
        }
        if (books[i] > books[maxIndex]) {
            maxIndex = i; 
        }
    }
    return [minIndex, maxIndex];
}
const libros = [350, 120, 540, 275, 390, 130, 670];
findMinMaxPages(libros);
// Exportar las funciones para que puedan ser completadas y probadas
module.exports = {
    procesarPedido,
    sumarPares,
    palabrasTerminanConA,
    buscaPalabras,
    findJavaScript,
    findMinMaxPages
};
