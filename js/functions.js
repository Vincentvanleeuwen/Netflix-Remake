let nav = document.getElementById('main-nav');
let navItems = document.getElementsByClassName('nav-item');
let toggle = document.getElementById('toggle');
console.log(navItems);
let hasClass = (element, className) => {
  return (' ' + element.className + ' ').indexOf(' ' + className + ' ') > -1;
}

if(nav) {
  toggle.addEventListener('click',  () => {
    // let current = document.getElementsByClassName("active-menu");

    for(let i = 0; i < navItems.length; i++) {

      if(hasClass(navItems[i], 'active-menu')) {
        setTimeout(() => {
          navItems[i].classList.toggle('active-menu');
          navItems[i].classList.toggle('leave-animation');
        }, 800);

          navItems[2].classList.toggle('leave-animation');

          setTimeout(() => {
            navItems[1].classList.toggle('leave-animation');
            setTimeout(() => {
              navItems[0].classList.toggle('leave-animation');
            }, 100)
          }, 100)


      }
      else {
        navItems[0].classList.toggle('active-menu');

        setTimeout( () => {
          navItems[1].classList.toggle('active-menu');
          setTimeout( () => {
            navItems[2].classList.toggle('active-menu');
          }, 200)
        }, 100)
      }

    }
  });
}

