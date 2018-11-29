let generateNewPalette = document.querySelector('.generate-palette-button');
let newPaletteForm = document.querySelector('.save-form');
let newPaletteName = document.querySelector('.palette-name');
let colorContainer = document.querySelector('.color-container');
let color1 = document.querySelector('.color-text-1');
let color2 = document.querySelector('.color-text-2');
let color3 = document.querySelector('.color-text-3');
let color4 = document.querySelector('.color-text-4');
let color5 = document.querySelector('.color-text-5');


getRandomColor = () => {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

let randomColors = [
  getRandomColor(),
  getRandomColor(),
  getRandomColor(),
  getRandomColor(),
  getRandomColor()
];


window.addEventListener('load', () => {
  createColorBlocks();
  getSavedPalettes();
});

let createColorBlocks = () => {
  colorContainer.innerHTML = ''

  return randomColors.forEach(color => {
    colorContainer.innerHTML += `
      <div class="color color${color}" style="background-color:${color}">
        <h1></h1>
        <img src="./images/lock.svg" class="lock-icon" alt="">
        <h2 class="color-text color-text-1">${color.toUpperCase()}</h2>
      </div>
    `
  });
};

let getSavedPalettes = () => {
  return fetch('/api/v1/palettes')
    .then(response => response.json())
    .then(data => displaySavedPalettes(data))
    .catch(error => console.log(error.message))
};

let displaySavedPalettes = (palettes) => {
  let projectPaletteContainer = document.querySelector('.project-palette-container')
  palettes.forEach(palette => {
    projectPaletteContainer.innerHTML += `
      <article class="saved-palette">
        <div class="saved-palette-top-row">
          <h2 class="saved-palette-title">${palette.name}</h2>
          <img src="./images/garbage.svg" alt="" class="trash-palette">
        </div>
        <article class="saved-palette-inner-container">
          <div class="saved-palette-color saved-palette-color1" style="background-color:${palette.color1}">
          </div>
          <div class="saved-palette-color saved-palette-color2" style="background-color:${palette.color2}">
          </div>
          <div class="saved-palette-color saved-palette-color3" style="background-color:${palette.color3}">
          </div>
          <div class="saved-palette-color saved-palette-color4" style="background-color:${palette.color4}">
          </div>
          <div class="saved-palette-color saved-palette-color5" style="background-color:${palette.color5}">
          </div>
        </article>
      </article>
    `
  })
}

generateNewPalette.addEventListener('click', (e) => {
  e.preventDefault();
  randomColors = [
    getRandomColor(),
    getRandomColor(),
    getRandomColor(),
    getRandomColor(),
    getRandomColor()
  ];
  createColorBlocks();
});

newPaletteForm.addEventListener('submit', (e) => {
  e.preventDefault();

  if (!newPaletteName.value.length) {
    alert('Please name your new palette');
    return;
  }

  let newPalette = {
    'name': newPaletteName.value,
    'color1': randomColors[0],
    'color2': randomColors[1],
    'color3': randomColors[2],
    'color4': randomColors[3],
    'color5': randomColors[4],
  };
  
  console.log(JSON.stringify(newPalette));

  let stringifiedPalette = JSON.stringify(newPalette);
  
  fetch('/api/v1/palettes', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: stringifiedPalette
  })
  .then(response => response.json());
  
  newPaletteName.value = '';
});