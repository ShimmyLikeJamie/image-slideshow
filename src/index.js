let pictures = [
  '1.jpg',
  '2.jfif',
  '3.jfif',
  '4.jpg',
  '5.jfif',
  '6.jfif',
  '7.jfif',
  '8.jfif',
];
let index = 0;
let next = document.getElementById('next');
let previous = document.getElementById('previous');
let currentImage = document.getElementById('currentImage');
let navigationDots = document.getElementById('navigationDots');
let i = 0;

while (i < pictures.length) {
  // Creates a navigationDot for each picture
  let dot = document.createElement('span');
  dot.classList.add('navigationDot');
  dot.setAttribute('id', `dot${String(i)}`);

  dot.onclick = () => {
    // Changes picture to current navigationDot's image
    let j = 3;
    let dotNumber = '';
    while (j < dot.id.length) {
      dotNumber += String(dot.id[j]);
      j += 1;
    }
    changeImage(parseInt(dotNumber));
  };

  navigationDots.appendChild(dot);
  i += 1;
}

let autoPlay = setInterval(() => {
  next.click();
}, 5000);

async function changeImage(index) {
  currentImage.id = 'invisible';
  await new Promise((r) => setTimeout(r, 1000));
  clearInterval(autoPlay);
  autoPlay = setInterval(() => {
    next.click();
  }, 5000);
  console.log('slept one second');
  let newsrc = 'styles/media/' + pictures[index];
  currentImage.setAttribute('src', newsrc);
  currentImage.id = 'currentImage';
}

next.onclick = () => {
  if (index == pictures.length - 1) {
    index = 0;
  } else {
    index += 1;
  }
  changeImage(index);
};
previous.onclick = () => {
  if (index == 0) {
    index = pictures.length - 1;
  } else {
    index -= 1;
  }
  changeImage(index);
};
