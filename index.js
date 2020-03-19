const bgs = require('./assets/backgrounds/*.jpg')
const images = require('./assets/images/*.jpg')

const keys = Object.keys(bgs)
document.getElementById('first').style.backgroundImage = `url(${bgs[keys[Math.random() * keys.length | 0]]})`
const slide = document.getElementById('slide')
Object.keys(images).sort(() => Math.random() - 0.5).forEach(it => {
  const img = new Image()
  img.className = 'swiper-slide'
  img.src = images[it]
  slide.appendChild(img)
})
const swiper = new window.Swiper('.swiper-container', {
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
})
