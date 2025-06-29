document.addEventListener('DOMContentLoaded', () => {
    const row1 = document.getElementById('row1');
    const row2 = document.getElementById('row2');
  
    if (row1 && row2) {
      const images2 = [
        { src: 'images/poster1.png', label: 'мастер-класс по созданию архива.<br>12.xii.2024<br>18:00' },
        { src: 'images/poster2.png', label: '' },
        { src: 'images/poster3.png', label: 'аудио-визуальная выставка.<br>10.i.2025–25.ii.2025<br>18:00–20:00' },
        { src: 'images/poster4.png', label: '' },
        { src: 'images/poster5.png', label: '' },
        { src: 'images/poster6.png', label: 'цикл лекций о памяти.<br>16.xii.2025–20.xii.2025<br>18:00–19:00' },
        { src: 'images/poster7.png', label: '' },
        { src: 'images/poster8.png', label: '' }
      ];
  
      let currentIndex2 = 0;
  
      document.addEventListener('click', () => {
        if (currentIndex2 >= images2.length) return;
  
        const imgData = images2[currentIndex2];
  
        const block = document.createElement('div');
        block.classList.add('image-block');
  
        const caption = document.createElement('div');
        caption.classList.add('caption');
        caption.innerHTML = imgData.label.trim() ? imgData.label : '&nbsp;';

        
  
        const img = document.createElement('img');
        img.src = imgData.src;
        img.alt = imgData.label.replace(/<br>/g, ' ');
  
        block.appendChild(caption);
        block.appendChild(img);
  
        if (currentIndex2 < images2.length / 2) {
          row1.appendChild(block);
        } else {
          row2.appendChild(block);
        }
  
        currentIndex2++;
      });
    }
  });

  
  
  