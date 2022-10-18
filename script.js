function initDropMenuList() {
  const dropMenuList = document.querySelectorAll('.drop-menu');
  // dropMenuList[1].classList.add('active')
  // dropMenuList[1].nextElementSibling.classList.add('active')
  function activateDropMenu() {
    this.classList.toggle('active');
    this.nextElementSibling.classList.toggle('active');
  }

  dropMenuList.forEach((item) => {
    item.addEventListener('click', activateDropMenu);
  });

  // Close the dropdown if there's a click outside of it
  window.onclick = function (e) {
    if (!e.target.matches('.drop-menu')) {
      const myDropdown = Array.from(document.querySelectorAll('.nav-menu'));

      myDropdown.forEach((item) => {
        if (item.classList.contains('active')) {
          item.classList.remove('active');
          item.previousElementSibling.classList.remove('active');
        }
      });
    }
  };
}
initDropMenuList();

const dropMenuList = document.querySelectorAll('.drop-menu');
function closeOpenedMenu() {

  let i;
  for (i = 0; i < dropMenuList.length; i++) {
    if (dropMenuList[i] != this) {
      if (dropMenuList[i].classList.contains('active')) {
        dropMenuList[i].classList.remove('active')
        dropMenuList[i].nextElementSibling.classList.remove('active')
      }
    }
  }


}

dropMenuList.forEach((item) => {
  item.addEventListener('click', closeOpenedMenu)
})