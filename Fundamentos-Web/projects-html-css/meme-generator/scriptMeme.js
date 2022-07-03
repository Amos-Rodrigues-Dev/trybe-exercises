const text = document.getElementById('meme-text');
// https://pt.stackoverflow.com/questions/75924/como-aparecer-o-que-eu-digitei-no-input-em-uma-imagem
window.mostrarTexto = () => {
  const campoTexto = document.getElementById('text-input').value;
  text.innerHTML = campoTexto;
};

// https://stackoverflow.com/questions/4459379/preview-an-image-before-it-is-uploaded/27165977#27165977
// onchange="loadFile(event)" Inclui na tag input="file"
// const loadFile = function (event) {
//   const reader = new FileReader();
//   reader.onload = function () {
//     const output = document.getElementById('meme-image');
//     output.src = reader.result;
//   };
//   reader.readAsDataURL(event.target.files[0]);
// };

const memeContainer = document.getElementById('meme-image-container');

const btnFire = document.getElementById('fire');
btnFire.style.backgroundColor = 'rgb(255 0 0)';
btnFire.addEventListener('click', () => {
  memeContainer.style.borderWidth = '3px';
  memeContainer.style.borderStyle = 'dashed';
  memeContainer.style.borderColor = btnFire.style.backgroundColor;
});

const btnWater = document.getElementById('water');
btnWater.style.backgroundColor = 'rgb(0 0 255)';
btnWater.addEventListener('click', () => {
  memeContainer.style.borderWidth = '5px';
  memeContainer.style.borderStyle = 'double';
  memeContainer.style.borderColor = btnWater.style.backgroundColor;
});

const btnEarth = document.getElementById('earth');
btnEarth.style.backgroundColor = 'rgb(0 128 0)';
btnEarth.addEventListener('click', () => {
  memeContainer.style.borderWidth = '6px';
  memeContainer.style.borderStyle = 'groove';
  memeContainer.style.borderColor = btnEarth.style.backgroundColor;
});

function changeImage(img) {
  const imagemSrc = document.getElementById('meme-image');
  imagemSrc.src = img;
}

const meme1 = document.getElementById('meme-1');
meme1.addEventListener('click', () => {
  changeImage(meme1.src);
});

const meme2 = document.getElementById('meme-2');
meme2.addEventListener('click', () => {
  changeImage(meme2.src);
});

const meme3 = document.getElementById('meme-3');
meme3.addEventListener('click', () => {
  changeImage(meme3.src);
});

const meme4 = document.getElementById('meme-4');
meme4.addEventListener('click', () => {
  changeImage(meme4.src);
});
