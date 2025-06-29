const images = [
   'images/book1.png' ,
    'images/book2.png',
    'images/book3.png',
    'images/book4.png',
    'images/book5.png',
    'images/book6.png',
    'images/book7.png',
    'images/book8.png',
    'images/book9.png',
    'images/book10.png',
    'images/book11.png',
    'images/book12.png',
    'images/book13.png',
    'images/book14.png',
    'images/book15.png',
  ];
  
  let currentIndex = 0;
  
  const overlayImg = document.getElementById('overlay1');
  
  overlayImg.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    overlayImg.src = images[currentIndex];
  });

  