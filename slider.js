const allSlides = document.querySelectorAll(".awo-review-slide");

let currentSlide = 0;
let maxValue = allSlides.length;

const next = document.querySelector("#next");
const prev = document.querySelector("#prev");
const addSlide = document.querySelector("#add-slide");

if (currentSlide == 0){
    prev.style.display = "none";
}

next.addEventListener("click", () => {
  if (currentSlide < maxValue - 1) {
    allSlides[currentSlide].classList.remove("current");
    currentSlide++;
    allSlides[currentSlide].classList.add('current');
    console.log(currentSlide);
    prev.style.display = "block";
  }
  if (currentSlide == maxValue -1){
    next.style.display = "none";
}
});

prev.addEventListener("click", () => {
  if (currentSlide > 0) {
    allSlides[currentSlide].classList.remove("current");
    currentSlide--;
    console.log(currentSlide);
    allSlides[currentSlide].classList.add('current');
  }
  if (currentSlide == 0){
    prev.style.display = "none";
    next.style.display = "block";
}
});

