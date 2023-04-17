

let contenidoOriginal = document.getElementById("container");

console.log(contenidoOriginal.innerHTML);

function procesarBoton(opcion) {
  if (opcion == "codificar") {
    codificar();
  } else {
    decodificar();
  }
}

  function codificar() {

    var texto = document.getElementById("entrada").value;

    if(texto.length < 1) {
        document.getElementById("cambio").innerHTML = '<img width="50%" src="search.png"/><br>\
        <h4>No se ha encontrado texto para decodificar</h4>';
        return;
    }

    let resultado = "";

    for (let i = 0; i < texto.length; i++) {
      let letra = texto[i].toLowerCase();
      switch (letra) {
        case "e":
          resultado += "enter";
          break;
        case "i":
          resultado += "imes";
          break;
        case "a":
          resultado += "ai";
          break;
        case "o":
          resultado += "ober";
          break;
        case "u":
          resultado += "ufat";
          break;
        default:
          resultado += letra;
      }
    }

    document.getElementById("cambio").innerHTML = '\
    <label for="salida">Texto decodificado</label>\
    <textarea rows="20" cols="30" id="salida" name="salida" class="textarea">'+resultado+'</textarea>\
    <button onclick="copiarContenido()">Copiar</button>';
    
  }


  function decodificar(texto) {

    var texto = document.getElementById("entrada").value;


    let resultado = "";

    for (let i = 0; i < texto.length; i++) {
      let letra = texto[i].toLowerCase();
      switch (letra) {
        case "e":
          if (texto[i+1] === "n" && texto[i+2] === "t" && texto[i+3] === "e" && texto[i+4] === "r") {
            resultado += "e";
            i += 4;
          } else {
            resultado += letra;
          }
          break;
        case "i":
          if (texto[i+1] === "m" && texto[i+2] === "e" && texto[i+3] === "s") {
            resultado += "i";
            i += 3;
          } else {
            resultado += letra;
          }
          break;
        case "a":
          if (texto[i+1] === "i") {
            resultado += "a";
            i += 1;
          } else {
            resultado += letra;
          }
          break;
        case "o":
          if (texto[i+1] === "b" && texto[i+2] === "e" && texto[i+3] === "r") {
            resultado += "o";
            i += 3;
          } else {
            resultado += letra;
          }
          break;
        case "u":
          if (texto[i+1] === "f" && texto[i+2] === "a" && texto[i+3] === "t") {
            resultado += "u";
            i += 3;
          } else {
            resultado += letra;
          }
          break;
        default:
          resultado += letra;
      }
    }
    
    document.getElementById("cambio").innerHTML = '\
    <label for="salida">Texto decodificado</label>\
    <textarea id="salida" name="salida" class="textarea">'+resultado+'</textarea>\
    <button onclick="copiarContenido()">Copiar</button>';
  }


  function copiarContenido() {

    var input = document.getElementById("salida");
    input.select();
    document.execCommand("copy");
    alert("¡Texto copiado al portapapeles!");

  }