const screens = document.querySelectorAll('.screen');
let currentScreen = 0;
const data = {};

document.querySelectorAll('.next-btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    const currentScreenEl = btn.closest('.screen');
    const currentIndex = Array.from(screens).indexOf(currentScreenEl);

    saveData(currentIndex);

    if (currentIndex < screens.length - 1) {
      screens[currentIndex].classList.add('hidden');
      screens[currentIndex + 1].classList.remove('hidden');
    }
  });
});


document.querySelectorAll('.back-btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    const currentScreenEl = btn.closest('.screen');
    const currentIndex = Array.from(screens).indexOf(currentScreenEl);

    if (currentIndex > 0) {
      screens[currentIndex].classList.add('hidden');
      screens[currentIndex - 1].classList.remove('hidden');
    }
  });
});

function saveData(index) {
  if (index === 0) {
    data.event = document.querySelector('[name="event"]').value;
    data.visuals = document.querySelector('[name="visuals"]').value;
    data.environment = document.querySelector('[name="environment"]').value;
    data.sounds = document.querySelector('[name="sounds"]').value;
    data.smells = document.querySelector('[name="smells"]').value;
  } else if (index === 1) {
    data.datetime = document.querySelector('[name="datetime"]').value;
  } else if (index === 2) {
    const photoFile = document.querySelector('[name="photo"]').files[0];
    const audioFile = document.querySelector('[name="audio"]').files[0];
    const videoFile = document.querySelector('[name="video"]').files[0];

    data.photo = photoFile ? URL.createObjectURL(photoFile) : null;
    data.audio = audioFile ? URL.createObjectURL(audioFile) : null;
    data.video = videoFile ? URL.createObjectURL(videoFile) : null;
    data.note = document.querySelector('[name="note"]').value;

    const table = document.getElementById('summary-table');
    table.innerHTML = `
      <tr><td>i. событие</td><td>${data.event}</td></tr>
      <tr><td>ii. визуальные образы</td><td>${data.visuals}</td></tr>
      <tr><td>iii. окружение</td><td>${data.environment}</td></tr>
      <tr><td>iv. звуки</td><td>${data.sounds}</td></tr>
      <tr><td>v. запахи</td><td>${data.smells}</td></tr>
      <tr><td>vi. дата и время</td><td>${data.datetime}</td></tr>
      <tr><td>vii. фото</td><td>${
        data.photo ? `<img src="${data.photo}" style="max-width: 200px;" />` : '—'
      }</td></tr>
      <tr><td>viii. аудио</td><td>${
        data.audio ? `<audio controls src="${data.audio}"></audio>` : '—'
      }</td></tr>
      <tr><td>ix. видео</td><td>${
        data.video ? `<video controls src="${data.video}" style="max-width: 300px;"></video>` : '—'
      }</td></tr>
      <tr><td>x. заметка</td><td>${data.note}</td></tr>
    `;
  }
}

