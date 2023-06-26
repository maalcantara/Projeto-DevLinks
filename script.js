function toggleMode() {
  const html = document.documentElement
// OUTRA OPÇÃO PARA TOGGLE
  //if(html.classList.contains('light')) {
  //  html.classList.remove('light')
  //} else {
  //  html.classList.add('light')
  //}

  // pegar a tag image e substituir a imagem.
  const img = document.querySelector("#profile img")

  //substituir imagem para modos dark e light
  if(html.classList.toggle('light')) {
    // se estiver light mode, adicionar img light:
    img.setAttribute('src', "./assets/icon3.jpg")
  } else {
    //se estiver dark mode:
    img.setAttribute('src', './assets/icon.jpg')
  }

//pegar a tag image e substituir a imagem. se tiver light mode add a imagem ligh, se tiver dark mode deixar.
}