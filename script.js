function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("dark")

  const img = document.querySelector('#profile img')
  if (html.classList.contains('light')) {
    img.setAttribute('src', './assets/avatar-light.png')
    img.setAttribute('alt', 'Avatar com óculos de sol com a língua pra fora.')
  } else {
    img.setAttribute('src', './assets/avatar-dark.png')
    img.setAttribute('alt', 'Avatar com touca, óculos com a língua pra fora.')
  }
}