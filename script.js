const HEADER =  document.getElementsByTagName('header')[0];
const MAIN_MENU = document.getElementById('main-menu');
const BURGER_MENU_BUTTON = document.getElementById('main-menu-button');
const LEFT_SLIDER_BUTTON = document.getElementById('left-slider-button');
const RIGHT_SLIDER_BUTTON = document.getElementById('right-slider-button');
const SLIDES = [
  document.getElementById('slide-1'),
  document.getElementById('slide-2'),
];
const IPHONE_VERTICAL = document.getElementById('iphone-vert');
const IPHONE_HORIZONTAL = document.getElementById('iphone-hor');
const SCREEN_VERTICAL = document.getElementById('screen-vert');
const SCREEN_HORIZONTAL = document.getElementById('screen-hor');
const PORTFOLIO_BUTTONS = [...document.getElementById('portfolio-menu').getElementsByTagName('button')];
const FORM = document.getElementById('myform');
const PORTFOLIO_IMAGES = document.getElementById('img-gr').querySelectorAll('img');

function onScroll() {
  const curPos = window.scrollY;
  const headerHeight = HEADER.classList.contains('mobile-menu-container')
    ? document.getElementsByClassName('empty-header')[0].offsetHeight
    : document.getElementsByTagName('header')[0].offsetHeight;
  const scrollHtmlHeight = document.getElementsByTagName('html')[0].scrollHeight;
  const htmlHeight = document.getElementsByTagName('html')[0].clientHeight;
  const scrollHtmlTop = document.getElementsByTagName('html')[0].scrollTop;
  const elements = document.querySelectorAll('section');
  const menuLinks = MAIN_MENU.querySelectorAll('a');

  console.log(headerHeight);

  elements.forEach((el) => {
    if (scrollHtmlHeight -  htmlHeight <= scrollHtmlTop) {
      menuLinks.forEach((a) => a.classList.remove('active-main'));
      menuLinks[menuLinks.length - 1].classList.add('active-main');
    } else if (el.offsetTop - 1 <= curPos + headerHeight) {
      menuLinks.forEach((a) => {
        a.classList.remove('active-main');
        if (el.getAttribute('id') === a.getAttribute('href').substring(1)) a.classList.add('active-main');
      })
    }
  });
}

document.addEventListener('scroll', onScroll);

MAIN_MENU.querySelectorAll('a').forEach((a) => {
  a.addEventListener('click', () => {
    MAIN_MENU.querySelectorAll('a').forEach((a) => a.classList.remove('active-main'));
    a.classList.add('active-main');
    if (HEADER.classList.contains('mobile-menu-container')) {
      document.getElementsByClassName('empty-header')[0].classList.add('display-none');
      document.getElementById('blur').classList.add('display-none');
      BURGER_MENU_BUTTON.classList.remove('anim-button-rotate-open');
      HEADER.classList.remove('anim-from-left-to-center2');
      HEADER.classList.remove('mobile-menu-container');
    }
  });
});

BURGER_MENU_BUTTON.addEventListener('click', () => {
  if (HEADER.classList.contains('mobile-menu-container')) {
    document.getElementsByClassName('empty-header')[0].classList.add('display-none');
    document.getElementById('blur').classList.add('display-none');
    BURGER_MENU_BUTTON.classList.remove('anim-button-rotate-open');
    HEADER.classList.remove('anim-from-left-to-center2');
    HEADER.classList.remove('mobile-menu-container');
  } else {
    document.getElementsByClassName('empty-header')[0].classList.remove('display-none');
    document.getElementById('blur').classList.remove('display-none');
    BURGER_MENU_BUTTON.classList.add('anim-button-rotate-open');
    HEADER.classList.add('anim-from-left-to-center2');
    HEADER.classList.add('mobile-menu-container');
  }
});

window.addEventListener("resize", () => {
  document.getElementsByClassName('empty-header')[0].classList.add('display-none');
  document.getElementById('blur').classList.add('display-none');
  BURGER_MENU_BUTTON.classList.remove('anim-button-rotate-open');
  HEADER.classList.remove('anim-from-left-to-center2');
  HEADER.classList.remove('mobile-menu-container');
});

const removeAnimationsFromSlides = (element) => {
  element.classList.remove('anim-from-center-to-left');
  element.classList.remove('anim-from-right-to-center');
  element.classList.remove('anim-from-center-to-right');
  element.classList.remove('anim-from-left-to-center');
}

const getActiveSlide = (arrOfSlides) => arrOfSlides.reduce((acc, el) => el.classList.contains('active-slide') ? el : acc, null);

const getNextSlide = (arrOfSlides) => {
  activeIndex = arrOfSlides.indexOf(getActiveSlide(arrOfSlides));
  return activeIndex + 1 === arrOfSlides.length ? arrOfSlides[0] : arrOfSlides[activeIndex + 1];
}

const getPreviousSlide = (arrOfSlides) => {
  activeIndex = arrOfSlides.indexOf(getActiveSlide(arrOfSlides));
  return activeIndex === 0 ? arrOfSlides[arrOfSlides.length - 1] : arrOfSlides[activeIndex - 1];
}

LEFT_SLIDER_BUTTON.addEventListener('click', () => {
  const activeSlide = getActiveSlide(SLIDES);
  const nextSlide = getNextSlide(SLIDES);

  removeAnimationsFromSlides(activeSlide);
  activeSlide.classList.remove('active-slide');
  activeSlide.classList.add('non-active-slide');
  activeSlide.classList.add('anim-from-center-to-left');

  removeAnimationsFromSlides(nextSlide);
  nextSlide.classList.remove('non-active-slide');
  nextSlide.classList.add('active-slide');
  nextSlide.classList.add('anim-from-right-to-center');
});

RIGHT_SLIDER_BUTTON.addEventListener('click', () => {
  const activeSlide = getActiveSlide(SLIDES);
  const previousSlide = getPreviousSlide(SLIDES);

  removeAnimationsFromSlides(activeSlide);
  activeSlide.classList.remove('active-slide');
  activeSlide.classList.add('non-active-slide');
  activeSlide.classList.add('anim-from-center-to-right');

  removeAnimationsFromSlides(previousSlide);
  previousSlide.classList.remove('non-active-slide');
  previousSlide.classList.add('active-slide');
  previousSlide.classList.add('anim-from-left-to-center');
});

IPHONE_VERTICAL.addEventListener('click', () => {
  if (SCREEN_VERTICAL.classList.contains('display-none')) SCREEN_VERTICAL.classList.remove('display-none');
  else SCREEN_VERTICAL.classList.add('display-none');
});

IPHONE_HORIZONTAL.addEventListener('click', () => {
  if (SCREEN_HORIZONTAL.classList.contains('display-none')) SCREEN_HORIZONTAL.classList.remove('display-none');
  else SCREEN_HORIZONTAL.classList.add('display-none');
});

SCREEN_VERTICAL.addEventListener('click', () => {
  if (SCREEN_VERTICAL.classList.contains('display-none')) SCREEN_VERTICAL.classList.remove('display-none');
  else SCREEN_VERTICAL.classList.add('display-none');
});

SCREEN_HORIZONTAL.addEventListener('click', () => {
  if (SCREEN_HORIZONTAL.classList.contains('display-none')) SCREEN_HORIZONTAL.classList.remove('display-none');
  else SCREEN_HORIZONTAL.classList.add('display-none');
});

PORTFOLIO_BUTTONS.forEach((event) => {
  event.addEventListener('click', (event) => {
    PORTFOLIO_BUTTONS.forEach((button) => button.classList.remove('active-button'));
    event.target.classList.add('active-button');

    const order = [];
    for (let i = 0; i < PORTFOLIO_IMAGES.length; i += 1) {
      order.push(i);
    }

    for (let i = order.length - 1; i > 0; i -= 1) {
      const pseudoRandom = Math.floor(Math.random()*(i + 1));
      [order[pseudoRandom], order[i]] = [order[i], order[pseudoRandom]];
    }
    
    order.forEach((num) => document.getElementById('img-gr').appendChild(PORTFOLIO_IMAGES[num]));
  })
});

PORTFOLIO_IMAGES.forEach((img) => {
  img.addEventListener('click', (event) => {
    if (!event.target.classList.contains('img-border')) {
      console.log(event.target);
      PORTFOLIO_IMAGES.forEach((el) => el.classList.remove('img-border'));
      event.target.classList.add('img-border');
    } else event.target.classList.remove('img-border');
  });
});

FORM.onsubmit = function() {
  const subject = document.getElementById('text-subject').value.toString() === ''
    ? 'Без темы' :
    `Тема: ${document.getElementById('text-subject').value.toString()}`;
  const describe = document.getElementById('text-describe').value.toString() === ''
    ? 'Без описания' :
    `Описание: ${document.getElementById('text-describe').value.toString()}`;
  document.getElementById('message').querySelector('div').querySelector('p').innerText = `Письмо отправлено\n${subject}\n${describe}`;
  document.getElementById('message').classList.remove('display-none');
  document.body.style.overflow = 'hidden';
  return false;
}

document.getElementById('ok').addEventListener('click', () => {
  FORM.reset();
  document.getElementById('message').classList.add('display-none');
  document.body.removeAttribute('style');
});
