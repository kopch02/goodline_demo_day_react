const toggleButton = document.getElementById('nav_btn')
const targetElement = document.getElementById('nav__list')

toggleButton.addEventListener('click', function () {
  console.log("asd")
  targetElement.classList.toggle('nav__list_active')
})
