function initDropMenuList() {
  const dropMenuList = document.querySelectorAll('.drop-menu')


  
  function activateDropMenu() {
    this.classList.toggle('active')
    this.nextElementSibling.classList.toggle('active')
  }
  
  dropMenuList.forEach((item) => {
    item.addEventListener('click', activateDropMenu)
  })
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(e) {
    if (!e.target.matches('.drop-menu')) {
    const myDropdown = Array.from(document.querySelectorAll(".nav-menu"));
  
    myDropdown.forEach((item) => {
      if (item.classList.contains('active')) {
          item.classList.remove('active');
          item.previousElementSibling.classList.remove('active');
        }
      })
    }
  }
}
initDropMenuList()