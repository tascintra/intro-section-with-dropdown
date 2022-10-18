const dropMenuList = document.querySelectorAll('.drop-menu')

function activateDropMenu() {
  this.classList.toggle('ativo')
  this.nextElementSibling.classList.toggle('ativo')
}

dropMenuList.forEach((item) => {
  item.addEventListener('click', activateDropMenu)
})

const myDropdown = document.getElementsByClassName('nav-menu')

// window.onclick = dropMenuList.forEach((item) => {
//   if (!item.target.matches('.drop-menu')) {
//     const myDropdown = document.getElementsByClassName('nav-menu')
//     if (myDropdown.classList.contains('ativo')) {
//       myDropdown.classList.remove('ativo');
//       myDropdown.previousElementSibling.classList.remove('ativo');
//     }
//   }
// })
// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
  if (!e.target.matches('.drop-menu')) {
  var myDropdown = document.getElementsByClassName("nav-menu");
  for (i = 0; i < 2; i++) {
    if (myDropdown[i].classList.contains('ativo')) {
      myDropdown[i].classList.remove('ativo');
      myDropdown[i].previousElementSibling.classList.remove('ativo');
    }
  }

  }
}

const arrowDown = document.querySelectorAll('.arrow-down')