// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  var matriz =[];
  propiedades = Object.keys(objeto);
  largo = Object.keys(objeto).length;
  for (var i = 0 ; i < largo ; i++){
    var aux = [];
    aux[0] = propiedades[i];
    aux[1] = objeto[propiedades[i]];
    matriz[i] = aux;
  }
return matriz
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  abecedario = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];
  repeticiones = [];
  neostring = string.split("");
  largo = neostring.length;
  var cosa = new Object(); 
  function contar(letra, palabra, largo){
    var contador = 0;
    for (var i = 0 ; i < largo ; i++){
      if (letra == palabra[i]){
        contador = contador + 1;
    }
  }
  return contador 
  }
for (var j = 0 ; j < largo ; j++){
  var aux = contar(abecedario[j], neostring, largo)
  if (aux > 0){
    cosa[abecedario[j]] = aux;
  }
}

return cosa     
}
    



function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var abc = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];  
  var ABC = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  palabra = s.split("");
  var largo_palabra = palabra.length;
  var largo_abc = abc.length
  var resultado = [];
  function comparar(abecedario, letra, largo, resultado){
  for (var i = 0 ; i < largo; i++){
    if (letra == abecedario[i]){
      resultado.push(letra);
    }
  }
  return resultado;
  }
for (var a = 0 ; a < largo_palabra ; a++){
  var aux = palabra [a]
  comparar(ABC, aux, largo_abc, resultado)
}
for (var b = 0 ; b < largo_palabra ; b++){
  var aux = palabra[b]
  comparar(abc, aux, largo_abc, resultado)
}
resultado = resultado.join("")
return resultado 
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  function inversor(palabra){
    //var largo = palabra.length;
    palabra = palabra.split("");
    palabra = palabra.reverse();
    palabra = palabra.join("") + " ";
    return palabra
  }
var respuesta = "";  
var palabras = str.split(" ");
var cont = palabras.length;
for (var i = 0 ; i < cont ; i++){
  var aux = inversor(palabras[i]);
  respuesta = respuesta + aux

}
var final = respuesta.substring(0, respuesta.length - 1)
return final
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  var entrada = numero.toString();
  entrada = entrada.split("");
  var largo = entrada.length;
  var aux = [];
  var cont = 0;
  for (var i = 0 ; i < largo ; i++){
    aux.push(entrada[largo-i-1])
  }
  for (j = 0 ; j < largo ; j++){
    if (aux[j] === entrada[j]){
      cont = cont + 1;
    }
  }
  if (cont === largo){
    return "Es capicua"
  }
  else return "No es capicua"  
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  return cadena.split("a").join("").split("b").join("").split("c").join("")
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  var largo = arr.length;
  var auxlargo = 0;
  var respuesta = [];
  for (var i = 0 ; i < largo ; i++){
    if (auxlargo < arr[i].length){
      auxlargo = arr[i].length;
    }
  }
  for (j = 1 ; j < auxlargo +1 ; j++){
    for (k = 0 ; k < largo ; k++)
      if (arr[k].length == j){
        respuesta.push(arr[k]);
      }
  }
return respuesta
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  var respuesta = [];
  var largo1 = arreglo1.length;
  var largo2 = arreglo2.length;
  for (var i = 0 ; i < largo1 ; i++){
    for (var j = 0 ; j < largo2 ; j++){
      if (arreglo1[i] == arreglo2[j]){
        //for (var = )
        respuesta.push(arreglo1[i]);
      }
    }
  }
  return respuesta
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

