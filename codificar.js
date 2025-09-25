// Character sprites system
const characterSprites = {
  idle: null,
  walk1: null,
  walk2: null,
  jump: null,
  duck: null
};

let currentCharacterState = 'idle';
let animationFrame = 0;

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
        document.getElementById("cambio").innerHTML = '<div id="characterDisplay" class="character-display"></div><br>\
        <h4>No se ha encontrado texto para decodificar</h4>';
        updateCharacterDisplay('idle');
        return;
    }

    // Change character to jump animation when encoding
    updateCharacterDisplay('jump');

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
    <div id="characterDisplay" class="character-display"></div>\
    <label for="salida">Texto codificado</label>\
    <textarea rows="20" cols="30" id="salida" name="salida" class="textarea">'+resultado+'</textarea>\
    <button onclick="copiarContenido()">Copiar</button>';
    
    // Return to idle after encoding
    setTimeout(() => updateCharacterDisplay('idle'), 1000);
    
  }


  function decodificar(texto) {

    var texto = document.getElementById("entrada").value;

    // Change character to duck animation when decoding
    updateCharacterDisplay('duck');


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
    <div id="characterDisplay" class="character-display"></div>\
    <label for="salida">Texto decodificado</label>\
    <textarea id="salida" name="salida" class="textarea">'+resultado+'</textarea>\
    <button onclick="copiarContenido()">Copiar</button>';
    
    // Return to idle after decoding
    setTimeout(() => updateCharacterDisplay('idle'), 1000);
  }


  function copiarContenido() {

    var input = document.getElementById("salida");
    input.select();
    document.execCommand("copy");
    alert("¡Texto copiado al portapapeles!");

  }

// Character sprite creation functions
function createIdleSprite() {
  const canvas = document.createElement('canvas');
  canvas.width = 32;
  canvas.height = 32;
  const ctx = canvas.getContext('2d');
  
  // Fondo negro
  ctx.fillStyle = '#000000';
  ctx.fillRect(0, 0, 32, 32);
  
  // Cuerpo principal (rojo)
  ctx.fillStyle = '#FF0000';
  ctx.fillRect(8, 12, 16, 12);
  
  // Sombrero (gris oscuro)
  ctx.fillStyle = '#404040';
  ctx.fillRect(6, 8, 20, 6);
  ctx.fillRect(8, 6, 16, 2);
  
  // Ojos (marrón oscuro)
  ctx.fillStyle = '#8B4513';
  ctx.fillRect(18, 14, 3, 2);
  ctx.fillRect(22, 14, 3, 2);
  
  // Brazo robótico (gris)
  ctx.fillStyle = '#808080';
  ctx.fillRect(4, 16, 4, 2);
  ctx.fillRect(2, 18, 2, 2);
  
  // Articulación azul
  ctx.fillStyle = '#0080FF';
  ctx.fillRect(2, 18, 2, 2);
  
  // Pierna robótica (azul)
  ctx.fillStyle = '#0000FF';
  ctx.fillRect(20, 24, 3, 6);
  ctx.fillRect(18, 26, 2, 2);
  
  // Elementos blancos inferiores
  ctx.fillStyle = '#FFFFFF';
  ctx.fillRect(10, 24, 12, 2);
  ctx.fillRect(8, 26, 16, 2);
  
  return canvas.toDataURL();
}

function createWalk1Sprite() {
  const canvas = document.createElement('canvas');
  canvas.width = 32;
  canvas.height = 32;
  const ctx = canvas.getContext('2d');
  
  ctx.fillStyle = '#000000';
  ctx.fillRect(0, 0, 32, 32);
  
  // Cuerpo ligeramente inclinado
  ctx.fillStyle = '#FF0000';
  ctx.fillRect(7, 12, 16, 12);
  
  // Sombrero
  ctx.fillStyle = '#404040';
  ctx.fillRect(5, 8, 20, 6);
  ctx.fillRect(7, 6, 16, 2);
  
  // Ojos
  ctx.fillStyle = '#8B4513';
  ctx.fillRect(17, 14, 3, 2);
  ctx.fillRect(21, 14, 3, 2);
  
  // Brazo robótico en movimiento
  ctx.fillStyle = '#808080';
  ctx.fillRect(3, 15, 4, 2);
  ctx.fillRect(1, 17, 2, 2);
  ctx.fillStyle = '#0080FF';
  ctx.fillRect(1, 17, 2, 2);
  
  // Pierna robótica
  ctx.fillStyle = '#0000FF';
  ctx.fillRect(19, 24, 3, 6);
  ctx.fillRect(17, 26, 2, 2);
  
  // Elementos blancos
  ctx.fillStyle = '#FFFFFF';
  ctx.fillRect(9, 24, 12, 2);
  ctx.fillRect(7, 26, 16, 2);
  
  return canvas.toDataURL();
}

function createWalk2Sprite() {
  const canvas = document.createElement('canvas');
  canvas.width = 32;
  canvas.height = 32;
  const ctx = canvas.getContext('2d');
  
  ctx.fillStyle = '#000000';
  ctx.fillRect(0, 0, 32, 32);
  
  // Cuerpo inclinado al otro lado
  ctx.fillStyle = '#FF0000';
  ctx.fillRect(9, 12, 16, 12);
  
  // Sombrero
  ctx.fillStyle = '#404040';
  ctx.fillRect(7, 8, 20, 6);
  ctx.fillRect(9, 6, 16, 2);
  
  // Ojos
  ctx.fillStyle = '#8B4513';
  ctx.fillRect(19, 14, 3, 2);
  ctx.fillRect(23, 14, 3, 2);
  
  // Brazo robótico
  ctx.fillStyle = '#808080';
  ctx.fillRect(5, 16, 4, 2);
  ctx.fillRect(3, 18, 2, 2);
  ctx.fillStyle = '#0080FF';
  ctx.fillRect(3, 18, 2, 2);
  
  // Pierna robótica
  ctx.fillStyle = '#0000FF';
  ctx.fillRect(21, 24, 3, 6);
  ctx.fillRect(19, 26, 2, 2);
  
  // Elementos blancos
  ctx.fillStyle = '#FFFFFF';
  ctx.fillRect(11, 24, 12, 2);
  ctx.fillRect(9, 26, 16, 2);
  
  return canvas.toDataURL();
}

function createJumpSprite() {
  const canvas = document.createElement('canvas');
  canvas.width = 32;
  canvas.height = 32;
  const ctx = canvas.getContext('2d');
  
  ctx.fillStyle = '#000000';
  ctx.fillRect(0, 0, 32, 32);
  
  // Cuerpo en posición de salto (más compacto)
  ctx.fillStyle = '#FF0000';
  ctx.fillRect(8, 8, 16, 14);
  
  // Sombrero
  ctx.fillStyle = '#404040';
  ctx.fillRect(6, 4, 20, 6);
  ctx.fillRect(8, 2, 16, 2);
  
  // Ojos
  ctx.fillStyle = '#8B4513';
  ctx.fillRect(18, 10, 3, 2);
  ctx.fillRect(22, 10, 3, 2);
  
  // Brazo robótico extendido
  ctx.fillStyle = '#808080';
  ctx.fillRect(4, 12, 4, 2);
  ctx.fillRect(2, 14, 2, 2);
  ctx.fillStyle = '#0080FF';
  ctx.fillRect(2, 14, 2, 2);
  
  // Pierna robótica extendida
  ctx.fillStyle = '#0000FF';
  ctx.fillRect(20, 22, 3, 8);
  ctx.fillRect(18, 24, 2, 2);
  
  // Elementos blancos
  ctx.fillStyle = '#FFFFFF';
  ctx.fillRect(10, 22, 12, 2);
  ctx.fillRect(8, 24, 16, 2);
  
  return canvas.toDataURL();
}

function createDuckSprite() {
  const canvas = document.createElement('canvas');
  canvas.width = 32;
  canvas.height = 32;
  const ctx = canvas.getContext('2d');
  
  ctx.fillStyle = '#000000';
  ctx.fillRect(0, 0, 32, 32);
  
  // Cuerpo agachado (más ancho, menos alto)
  ctx.fillStyle = '#FF0000';
  ctx.fillRect(6, 16, 20, 10);
  
  // Sombrero
  ctx.fillStyle = '#404040';
  ctx.fillRect(8, 12, 16, 6);
  ctx.fillRect(10, 10, 12, 2);
  
  // Ojos
  ctx.fillStyle = '#8B4513';
  ctx.fillRect(16, 18, 3, 2);
  ctx.fillRect(20, 18, 3, 2);
  
  // Brazo robótico
  ctx.fillStyle = '#808080';
  ctx.fillRect(4, 20, 4, 2);
  ctx.fillRect(2, 22, 2, 2);
  ctx.fillStyle = '#0080FF';
  ctx.fillRect(2, 22, 2, 2);
  
  // Pierna robótica
  ctx.fillStyle = '#0000FF';
  ctx.fillRect(18, 26, 3, 4);
  ctx.fillRect(16, 28, 2, 2);
  
  // Elementos blancos
  ctx.fillStyle = '#FFFFFF';
  ctx.fillRect(8, 26, 16, 2);
  ctx.fillRect(6, 28, 20, 2);
  
  return canvas.toDataURL();
}

// Initialize character sprites
function initializeCharacterSprites() {
  characterSprites.idle = createIdleSprite();
  characterSprites.walk1 = createWalk1Sprite();
  characterSprites.walk2 = createWalk2Sprite();
  characterSprites.jump = createJumpSprite();
  characterSprites.duck = createDuckSprite();
  
  // Set initial character display
  updateCharacterDisplay('idle');
}

// Update character display
function updateCharacterDisplay(state) {
  const display = document.getElementById('characterDisplay');
  if (display && characterSprites[state]) {
    display.style.backgroundImage = `url(${characterSprites[state]})`;
    currentCharacterState = state;
  }
}

// Animation system
function animateCharacter() {
  if (currentCharacterState === 'idle') {
    // Simple idle animation - slight movement
    if (animationFrame % 60 < 30) {
      updateCharacterDisplay('idle');
    } else {
      updateCharacterDisplay('walk1');
    }
  }
  animationFrame++;
  requestAnimationFrame(animateCharacter);
}

// Start animation when page loads
window.addEventListener('load', function() {
  initializeCharacterSprites();
  animateCharacter();
});
