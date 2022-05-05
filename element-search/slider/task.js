const arrowPrev = document.querySelector(".slider__arrow_prev");
const arrowNext = document.querySelector(".slider__arrow_next");
const sliders = document.querySelectorAll(".slider__item");

let i = 0;

const activeSlide = n => {
  for (slider of sliders) {
    
    slider.classList.remove("slider__item_active");
  }
  sliders[n].classList.add("slider__item_active");
}

const currentSlide = function (index) {
  activeSlide(index);
  
}

const nextSlide = function () {
  if (i === sliders.length - 1) {
    i = 0;
    currentSlide(i);
  } else {
    i++;
    currentSlide(i);
  }
}

const prevSlide = function () {
  if (i === 0) {
    i = sliders.length - 1;
    currentSlide(i);
  } else {
    i--;
    currentSlide(i);
  }
}


arrowNext.onclick = function () {
  nextSlide();
  return false;
}

arrowPrev.onclick = function () {
  prevSlide();
  return false;
}
