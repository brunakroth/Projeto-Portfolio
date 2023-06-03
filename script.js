function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
  // É o mesmo que usar:

  // if (html.classList.contains("light")) {
  //   html.classList.remove("light")
  // } else {
  //   html.classList.add('light')
  // }

  // Pegar a tag img
  const img = document.querySelector("#profile img")
  
  // Substituir a imagem
  if (html.classList.contains("light")) {
    // Se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute("alt", "Foto de Bruna Kroth clara")
  } else {
    // se tiver sem light mode, manter a imagem normal
    img.setAttribute("alt", "Foto de Bruna Kroth sorrindo")
  }
}
