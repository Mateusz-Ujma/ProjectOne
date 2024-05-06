let scrollPos = document.documentElement.scrollTop;
const imagesBg = document.querySelectorAll('.img-bg');

if (document.scrollingElement.clientWidth < 1200) {
  imagesBg[2].style.display = 'none';
}
if (document.scrollingElement.clientWidth < 850) {
  imagesBg[1].style.display = 'none';
}

document.addEventListener('scroll', (event) => {
  scrollPos = document.documentElement.scrollTop;

  if (scrollPos < 1130) {
    imagesBg[0].src = '/images/hair1.jpg';
    imagesBg[1].src = '/images/hair2.jpg';
    imagesBg[2].src = '/images/hair3.jpg';
  } else if (scrollPos > 1130 && scrollPos < 2300) {
    imagesBg[0].src = '/images/gallery1.jpg';
    imagesBg[1].src = '/images/gallery2.jpg';
    imagesBg[2].src = '/images/gallery3.jpg';
  } else if (scrollPos > 2300 && scrollPos < 4000) {
    imagesBg[0].src = '/images/gallery4.jpg';
    imagesBg[1].src = '/images/gallery5.jpg';
    imagesBg[2].src = '/images/gallery6.jpg';
  }
});
