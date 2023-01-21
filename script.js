function initHandleDropMenu() {
  const dropMenuList = document.querySelectorAll('.drop-menu');

  function activateDropMenu() {
    this.classList.toggle('active');
    this.nextElementSibling.classList.toggle('active');
  }

  dropMenuList.forEach((item) => {
    item.addEventListener('click', activateDropMenu);
  });

  // Close the opened menu if there's a click on the other drop menu
  function closeOpenedMenu() {
    dropMenuList.forEach((item) => {
      if (item != this) {
        if (item.classList.contains('active')) {
          item.classList.remove('active')
          item.nextElementSibling.classList.remove('active')
        }
      }
    })
  }
    
  dropMenuList.forEach((item) => {
    item.addEventListener('click', closeOpenedMenu);
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
initHandleDropMenu();

// Interactions for hamburger menu
function initMobileMenu() {
  const hamMenu = document.querySelector('.mob-menu');
  const mainMenu = document.querySelector('.main-menu');
  const menuOverlay = document.querySelector('.overlay')

  function activateHamMenu() {
    hamMenu.classList.toggle('active');
    mainMenu.classList.toggle('responsive');
    menuOverlay.classList.toggle('active')
  }

  hamMenu.addEventListener('click', activateHamMenu);
}
initMobileMenu();