import '../sass/style.scss';

const chooseSlide = (event) => {
  console.log('here')
  if(!event.target.classList.contains('dots__item')) {
    return;
  }

  const child = event.target;
  const parent = child.parentNode;
  const index = Array.prototype.indexOf.call(parent.children, child);

  Array.from(parent.children).forEach((dot, index) => {
    dot.classList.remove('dots__item--active');
  });
  event.target.classList.add('dots__item--active');

  showSlides(index + 1);
};

/* Основная функция слайдера */
const showSlides = (n) => {
  const slides = document.querySelectorAll(".slides__item");

  slides.forEach((slide, index) => {
    (index === n - 1) ? slide.style.display = 'block' : slide.style.display = 'none';
  });
};

showSlides(1);

const dots = document.querySelector(".slider__dots");
dots.addEventListener('click', (e) => chooseSlide(e));

const FORM = document.getElementById('form-id');
const MODAL = document.getElementById('modal-id');
const CLOSE = document.querySelector(".modal__close");
const FORM_INPUT = document.querySelector('.form-phone__number');

FORM.addEventListener('submit', event => {
  event.preventDefault();
  MODAL.style.display = 'flex';

  FORM_INPUT.value = '';
});

CLOSE.addEventListener('click', () => {
  MODAL.style.display = 'none'
});

window.addEventListener('click', event => {
  if (event.target === MODAL) {
    MODAL.style.display = 'none'
  }
});