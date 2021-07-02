const randomColorButton = document.getElementById('randomColorButton');
const settingRgbButton = document.getElementById('settingRgbButton');
const formRgb = document.getElementsByClassName('formRgb')[0];
const sMerah = document.querySelector('input[name=sMerah]');
const sHijau = document.querySelector('input[name=sHijau]');
const sBiru = document.querySelector('input[name=sBiru]');
const line = document.getElementById('line');
const pRgb = document.getElementById('rgb');
const pHex = document.getElementById('hex');

// Random color on refresh
const r = Math.round(Math.random() * 255 + 1);
const g = Math.round(Math.random() * 255 + 1);
const b = Math.round(Math.random() * 255 + 1);
const color = "#" + hex(r) + hex(g) + hex(b);

document.body.style.backgroundColor = 'rgb(' + r + ', ' + g + ', ' + b + ')';
line.style.backgroundColor = 'rgb(' + r + ', ' + g + ', ' + b + ')';

pRgb.setAttribute('value', 'rgb(' + r + ', ' + g + ', ' + b + ')');
pHex.setAttribute('value', color);

// Display rgb form
settingRgbButton.addEventListener('click', function () {
  formRgb.classList.toggle('tampil');
  if (formRgb.classList.contains('tampil')) {
    settingRgbButton.innerHTML = 'Hide Form';
  } else {
    settingRgbButton.innerHTML = 'Setting RGB';
  }
});

// Random color on click
randomColorButton.addEventListener('click', function () {
  const r = parseInt(Math.round(Math.random() * 255 + 1));
  const g = parseInt(Math.round(Math.random() * 255 + 1));
  const b = parseInt(Math.round(Math.random() * 255 + 1));
  const color = "#" + hex(r) + hex(g) + hex(b);
  document.body.style.backgroundColor = 'rgb(' + r + ', ' + g + ', ' + b + ')';
  line.style.backgroundColor = 'rgb(' + r + ', ' + g + ', ' + b + ')';
  pRgb.setAttribute('value', 'rgb(' + r + ', ' + g + ', ' + b + ')');
  pHex.setAttribute('value', color);
});

// For input red
sMerah.addEventListener('input', function () {
  const r = parseInt(sMerah.value);
  const g = parseInt(sHijau.value);
  const b = parseInt(sBiru.value);
  const color = "#" + hex(r) + hex(g) + hex(b);
  document.body.style.backgroundColor = 'rgb(' + r + ', ' + g + ', ' + b + ')';
  line.style.backgroundColor = 'rgb(' + r + ', ' + g + ', ' + b + ')';
  pRgb.setAttribute('value', 'rgb(' + r + ', ' + g + ', ' + b + ')');
  pHex.setAttribute('value', color);
});

// For input green
sHijau.addEventListener('input', function () {
  const r = parseInt(sMerah.value);
  const g = parseInt(sHijau.value);
  const b = parseInt(sBiru.value);
  const color = "#" + hex(r) + hex(g) + hex(b);
  document.body.style.backgroundColor = 'rgb(' + r + ', ' + g + ', ' + b + ')';
  line.style.backgroundColor = 'rgb(' + r + ', ' + g + ', ' + b + ')';
  pRgb.setAttribute('value', 'rgb(' + r + ', ' + g + ', ' + b + ')');
  pHex.setAttribute('value', color);
});

// For input Blue
sBiru.addEventListener('input', function () {
  const r = parseInt(sMerah.value);
  const g = parseInt(sHijau.value);
  const b = parseInt(sBiru.value);
  const color = "#" + hex(r) + hex(g) + hex(b);
  document.body.style.backgroundColor = 'rgb(' + r + ', ' + g + ', ' + b + ')';
  line.style.backgroundColor = 'rgb(' + r + ', ' + g + ', ' + b + ')';
  pRgb.setAttribute('value', 'rgb(' + r + ', ' + g + ', ' + b + ')');
  pHex.setAttribute('value', color);
});

// For change the rgb color to hex color
function hex(v) {
  let hex = v.toString(16);
  if (v < 16) {
    hex = "0" + hex;
  }
  return hex;
}

// Copy rgb code to clipboard
function copyRgb() {
  const rgb = document.getElementById('rgb');
  const copyRgbColor = document.getElementById('copyRgbColor');
  rgb.select();
  rgb.setSelectionRange(0, 9999);
  document.execCommand('copy');
  copyRgbColor.setAttribute('class', 'fas fa-check-double');
  setTimeout(function () {
    copyRgbColor.setAttribute('class', 'fas fa-copy');
  }, 2000);
}

// Copy hex code to clipboard
function copyHex() {
  const hex = document.getElementById('hex');
  const copyHexColor = document.getElementById('copyHexColor');
  hex.select();
  hex.setSelectionRange(0, 9999);
  document.execCommand('copy');
  copyHexColor.setAttribute('class', 'fas fa-check-double');
  setTimeout(function () {
    copyHexColor.setAttribute('class', 'fas fa-copy');
  }, 2000);
}