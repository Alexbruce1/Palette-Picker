let generateNewPalette = document.querySelector('.generate-palette-button');
let newPaletteForm = document.querySelector('.save-form');
let newPaletteName = document.querySelector('.palette-name');
let color1 = document.querySelector('.color-text-1');
let color2 = document.querySelector('.color-text-2');
let color3 = document.querySelector('.color-text-3');
let color4 = document.querySelector('.color-text-4');
let color5 = document.querySelector('.color-text-5');

generateNewPalette.addEventListener('click', (e) => {
  e.preventDefault();
  console.log('change Color Palette');
});

newPaletteForm.addEventListener('submit', (e) => {
  e.preventDefault();
  let newPalette = {
    name: newPaletteName.value,
    id: Date.now(),
    'color1': color1.textContent,
    'color2': color2.textContent,
    'color3': color3.textContent,
    'color4': color4.textContent,
    'color5': color5.textContent,
  };
  console.log(newPalette);
})