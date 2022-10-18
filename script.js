const dropMenuList = document.querySelectorAll('.drop-menu')

function activateDropMenu() {
  this.nextElementSibling.classList.toggle('ativo')
}

dropMenuList.forEach((item) => {
  item.addEventListener('click', activateDropMenu)
})

window.onclick = console.log('clicou janela')



const arrowDown = document.querySelectorAll('.arrow-down')