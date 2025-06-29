document.addEventListener('DOMContentLoaded', () => {
    const products = [
      { src: 'images/postcard.png', top: 'a', bottom: 'открытка 148х105 мм' },
      { src: 'images/postcard1.png', top: 'b', bottom: 'открытка 148х105 мм' },
      { src: 'images/postcard2.png', top: 'c', bottom: 'открытка 148х105 мм' },
      { src: 'images/postcard3.png', top: 'd', bottom: 'открытка 148х105 мм' },
      { src: 'images/postcard4.png', top: 'e', bottom: 'открытка 148х105 мм' },
      { src: 'images/t-shirt.png', top: 'f', bottom: 'футболка one size белая' },
      { src: 'images/t-shirt2.png', top: 'g', bottom: 'футболка one size чёрная' },
      { src: 'images/bag.png', top: 'h', bottom: 'шоппер белый' },
      { src: 'images/bag2.png', top: 'i', bottom: 'шоппер чёрный' }
    ];
  
    const grid = document.getElementById('gridm');
    const previewContent = document.getElementById('previewContent');
  
    let cart = [];
  
    products.forEach((product, index) => {
      const item = document.createElement('div');
      item.classList.add('grid-itemm');
  
      const caption = document.createElement('div');
      caption.classList.add('grid-captionm');
      caption.textContent = product.top;
  
      const img = document.createElement('img');
      img.src = product.src;
      img.alt = product.top;
  
      item.appendChild(caption);
      item.appendChild(img);
      grid.appendChild(item);
  
      item.addEventListener('click', () => {
        previewContent.classList.remove('hidden');
        previewContent.innerHTML = '';
  
        const wrapper = document.createElement('div');
        wrapper.classList.add('preview-wrapper');
  
        const captionTop = document.createElement('div');
        captionTop.classList.add('caption-topm');
        captionTop.textContent = product.top;
  
        const previewImage = document.createElement('img');
        previewImage.id = 'previewImage';
        previewImage.src = product.src;
        previewImage.alt = product.top;
  
        const captionBottom = document.createElement('div');
        captionBottom.classList.add('caption-bottomm');
        captionBottom.textContent = product.bottom;
  
        const buyButton = document.createElement('div');
        buyButton.classList.add('buy-button');
        buyButton.textContent = 'купить';
        buyButton.style.cursor = 'pointer';
  
        buyButton.addEventListener('click', () => {
          cart.push(product);
          alert(`Товар "${product.top}" добавлен в корзину.`);
          console.log('Корзина:', cart);
        });
  
        wrapper.appendChild(captionTop);
        wrapper.appendChild(previewImage);
        wrapper.appendChild(captionBottom);
        wrapper.appendChild(buyButton);
  
        previewContent.appendChild(wrapper);
      });
    });
  });
  
  
  