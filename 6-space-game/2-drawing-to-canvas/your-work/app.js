function loadTexture(path) {
  return new Promise((resolve) => {
    const img = new Image()
    img.src = path
    img.onload = () => {
      resolve(img)
    }
  })
}

function createEnemies(ctx, canvas, enemyImg) {
  // TODO disegnare i nemici
}

window.onload = async () => {
  canvas = document.getElementById('canvas')
  ctx = canvas.getContext('2d')
  // TODO 2 - caricare le strutture di gioco

  // TODO 1 - disegnare lo sfondo nero
  // TODO 3 - disegnare l'eroe
  // TODO 4 - togliere il commento dalla riga successiva quando si aggiungono nemici sullo schermo
  //createEnemies(ctx, canvas, enemyImg);
}
