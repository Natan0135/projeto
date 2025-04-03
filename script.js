function ToggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a tag img`
  const img = document.querySelector("#profile img")
  const alter = document.querySelector("#profile img")
  
  //substituir a imagem
  if (html.classList.contains("light")) {
    //se tiver light mode, adicionar a imagem light
    img.setAttribute('src', './assets/anime.png')
    alter.setAttribute('alt', 'Mulher de cabelo azul, com olhos azulados como o mar, com uma roupa/gola preta e com os cabelos voandos como se tivesse tendo um vento forte')
  } else {
    //se tiver sem light mode, manter a imagem
    img.setAttribute("src", "./assets/anime2.png")
    alter.setAttribute('alt', 'Mulher de cabelo roxo, com olhos rosados como flores rosas, com uma roupa/gola preta e com os cabelos voandos como se tivesse tendo um vento forte')

  }

}
