const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');
const carousel = document.querySelector('.carousel');
const carouselList = document.querySelector('.carousel .list');
const thumbnail = document.querySelector('.carousel .thumbnail');
const thumbnailItems = document.querySelectorAll('.carousel .thumbnail .item');
const time = document.querySelector('.time');

thumbnail.appendChild(thumbnailItems[0]);

let timeRunning = 2000;
let timeAutoNext = 7000;
let runTimeOut;

let runNextAuto = setTimeout(() => {
  nextBtn.click();
}, timeAutoNext);

nextBtn.onclick = () => {
  showSlider('next');
};

prevBtn.onclick = () => {
  showSlider('prev');
};

function showSlider(type) {
  const sliderItems = document.querySelectorAll('.carousel .list .item');
  const thumbnailItems = document.querySelectorAll('.carousel .thumbnail .item');
  console.log(sliderItems);

  if (type === 'next') {
    carouselList.appendChild(sliderItems[0]);
    thumbnail.appendChild(thumbnailItems[0]);
    carousel.classList.add('next');
  } else {
    carouselList.prepend(sliderItems[sliderItems.length - 1]);
    thumbnail.prepend(thumbnailItems[thumbnailItems.length - 1]);
    carousel.classList.add('prev');
  }

  clearTimeout(runNextAuto);
  runNextAuto = setTimeout(() => {
    nextBtn.click();
  }, timeAutoNext);

  clearTimeout(runTimeOut);
  runTimeOut = setTimeout(() => {
    carousel.classList.remove('next');
    carousel.classList.remove('prev');
  }, timeRunning);
}
