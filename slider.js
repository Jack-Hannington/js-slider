const allSlides = document.querySelectorAll(".awo-review-slide");

// we have 3 slides. each one needs assigning a number

let currentSlide = 0;
let maxValue = allSlides.length;

// on click current slide =+ 1;
const next = document.querySelector("#next");
const prev = document.querySelector("#prev");

next.addEventListener("click", () => {
  if (currentSlide < maxValue - 1) {
    allSlides[currentSlide].classList.remove("current");
    currentSlide++;
    allSlides[currentSlide].classList.add('current');
    console.log(currentSlide);
  }
});

prev.addEventListener("click", () => {
  if (currentSlide > 0) {
    allSlides[currentSlide].classList.remove("current");
    currentSlide--;
    console.log(currentSlide);
    allSlides[currentSlide].classList.add('current');
  }

});
