const cont = document.querySelector('.gallery-container');
const images = [];
const imageElList = [];

for (let i = 1; i <= 7; i++) {
  images.push('/images/gallery' + i + '.jpg');
}
for (let i = 0; i <= 6; i++) {
  imageElList.push(document.createElement('img'));
  imageElList[i].classList.add('gallery-img');
  imageElList[i].src = images[i];
}
for (let i = 0; i <= 6; i++) {
  imageElList.push(document.createElement('img'));
  imageElList[i + 7].classList.add('gallery-img');
  imageElList[i + 7].src = images[i];
}
for (let i = 0; i <= 13; i++) {
  cont.appendChild(imageElList[i]);
}
