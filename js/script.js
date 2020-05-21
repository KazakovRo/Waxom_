const hamburgerBtn = document.querySelector('.menu-btn'),
      hamburgerMenu = document.querySelector('.hamburger-content'),
      hamburgerMenuLink = document.querySelectorAll('.menu-items .menu-item'),
      hamburgerX = document.querySelector('.hamburger-content .x-mark'),
      searchBtn = document.querySelector('.fa-search'),
      searchSearchBtn = document.querySelector('.search-btn'),
      searchBar = document.querySelector('.search-content'),
      searchX = document.querySelector('.search-content .x-mark');

hamburgerBtn.addEventListener('click', () => {
  hamburgerMenu.style.display = 'flex';
  setTimeout(() => { 
    hamburgerMenu.style.opacity = 1;
  }, 1);
})

hamburgerX.addEventListener('click', () => {
  hamburgerMenu.style.opacity = 0;
  setTimeout(() => { 
    hamburgerMenu.style.display = 'none';
  }, 300);
})

hamburgerMenuLink.forEach(el => {
  el.addEventListener('click', () => {
    hamburgerMenu.style.opacity = 0;
    setTimeout(() => { 
      hamburgerMenu.style.display = 'none';
    }, 300);
  })
})

searchBtn.addEventListener('click', () => {
  searchBar.style.display = 'flex';
  setTimeout(() => { 
    searchBar.style.opacity = 1;
  }, 1);
})

searchX.addEventListener('click', () => {
  searchBar.style.opacity = 0;
  setTimeout(() => { 
    searchBar.style.display = 'none';
  }, 300);
})

searchSearchBtn.addEventListener('click', () => {
  searchBar.style.opacity = 0;
  setTimeout(() => { 
    searchBar.style.display = 'none';
  }, 300);
})
